import { useMutation } from '@apollo/client';
import { message, Spin } from 'antd';
import { FC, useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { VERIFY_TOKEN_AUTH } from '../graph/mutations/verifyToken';
import { REFRESH_TOKEN_AUTH } from '../graph/mutations/refreshToken';
import { getCookie } from '../services/cookie';

interface AuthProviderProps {}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const history = useHistory();
  const [verifyTokenRequest, { data, loading }] = useMutation(
    VERIFY_TOKEN_AUTH,
  );
  const [refreshTokenRequest, { loading: refreshLoading }] = useMutation(
    REFRESH_TOKEN_AUTH,
  );
  const token = getCookie('token');
  const tokenRefresh = getCookie('refreshToken');

  const refreshToken = useCallback(() => {
    refreshTokenRequest({
      variables: { token: tokenRefresh },
    }).catch((res) => {
      res.graphQLErrors.forEach((error: { message: string }) => {
        message.error(error.message);
      });
    });
  }, [refreshTokenRequest, tokenRefresh]);

  const verifyToken = useCallback(() => {
    if (!token) {
      history.push('/auth');
    } else {
      verifyTokenRequest({ variables: { token } }).catch((res) => {
        res.graphQLErrors.forEach((error: { message: string }) => {
          if (error.message === 'Signature has expired') {
            refreshToken();
          }
        });
      });
    }
  }, [token, history, verifyTokenRequest, refreshToken]);

  useEffect(() => {
    verifyToken();
  }, [verifyToken]);

  useEffect(() => {
    if (data && !data.verifyToken) {
      history.push('/auth');
    } else {
      history.push('/');
    }
  }, [data, history]);

  return (
    <Spin spinning={loading || refreshLoading}>
      <div>{children}</div>
    </Spin>
  );
};

export default AuthProvider;
