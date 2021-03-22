import { FC, useCallback, useEffect, useState } from 'react';
import './Auth.scss';
import Warning from '../../components/Warning/Warning';
import { Button, Input, message, Spin, Tabs } from 'antd';
import { useMutation } from '@apollo/client';
import { TOKEN_AUTH } from '../../graph/mutations/tokenAuth';
import { CREATE_USER } from '../../graph/mutations/createUser';
import { useHistory } from 'react-router-dom';
import { setCookie } from '../../services/cookie';

interface IExternalProps {}

const { TabPane } = Tabs;

interface IProps extends IExternalProps {}

const Auth: FC<IProps> = () => {
  const history = useHistory();
  const [tokenAuth, { data: tokenAuthData, loading }] = useMutation(TOKEN_AUTH);
  const [
    createUser,
    { data: createUserData, loading: createUserLoading },
  ] = useMutation(CREATE_USER);
  const [tab, setTab] = useState('1');

  function updateTab(key: string) {
    setTab(key);
  }

  const onSubmitRegister = useCallback(
    (e) => {
      e.preventDefault();
      const formData: any = new FormData(e.target);
      const data = {} as any;
      for (const [name, value] of formData) {
        data[name] = value;
      }
      createUser({ variables: data }).catch((res) => {
        res.graphQLErrors.forEach((error: { message: string }) => {
          message.error(error.message);
        });
      });
    },
    [createUser],
  );

  const onSubmitLogin = useCallback(
    (e) => {
      e.preventDefault();
      const formData: any = new FormData(e.target);
      const data = {} as any;
      for (const [name, value] of formData) {
        data[name] = value;
      }
      tokenAuth({ variables: data }).catch((res) => {
        res.graphQLErrors.forEach((error: { message: string }) => {
          message.error(error.message);
        });
      });
    },
    [tokenAuth],
  );

  useEffect(() => {
    if (createUserData?.createUser) {
      message.success('Вы успешно зарегистрированы');
      setCookie('token', createUserData.createUser.token);
      setCookie('refreshToken', createUserData.createUser.refreshToken);
      history.push('/');
    }
  }, [createUserData, history]);

  useEffect(() => {
    if (tokenAuthData?.tokenAuth) {
      message.success('Вы успешно авторизованы');
      setCookie('token', tokenAuthData.tokenAuth.token);
      setCookie('refreshToken', tokenAuthData.tokenAuth.refreshToken);
      history.push('/');
    }
  }, [tokenAuthData, history]);

  const title =
    tab === '1'
      ? 'Регистрация для розничных клиентов'
      : tab === '2'
      ? 'ВХОД ДЛЯ РОЗНИЧНЫХ КЛИЕНТОВ'
      : 'Профиль';

  return (
    <Spin spinning={loading || createUserLoading}>
      <div className="page-with-header">
        <div className="container">
          <Warning className="mt-5">
            <div className="break-all">
              Notice: Undefined index: tid in drupal_page_get_cache() (line 1315
              of /var/www/koreanaparts.ru/includes/bootstrap.inc).
            </div>
          </Warning>
          <h1 className="Auth-title mt-2">{title}</h1>

          <Tabs
            className="Auth-block-tabs"
            defaultActiveKey="1"
            onChange={updateTab}>
            <TabPane tab="Регистрация" key="1">
              <form onSubmit={onSubmitRegister}>
                <p className="Auth-paragraph mb-1">Email-адрес * :</p>
                <Input
                  name="username"
                  className="Auth-line-of-input"
                  placeholder="Введите адрес"
                />
                <p className="mb-1 mt-3">
                  {' '}
                  <b>Пароль *</b>{' '}
                </p>
                <Input
                  name="password"
                  type="password"
                  className="Auth-line-of-input"
                  placeholder="Login"
                />
                <div>
                  <Button htmlType="submit" className="Auth-sign-up-button">
                    <p className="Auth-text-button "> РЕГИСТРАЦИЯ</p>
                  </Button>
                </div>
              </form>
            </TabPane>
            <TabPane tab="Вход" key="2">
              <form onSubmit={onSubmitLogin}>
                <div className="Auth-border">
                  <p className="mb-1">
                    {' '}
                    <b>Логин *</b>{' '}
                  </p>
                  <Input
                    name="username"
                    className="Auth-line-of-input"
                    placeholder="Login"
                  />
                  <p>
                    Вы можете авторизоваться, используя имя пользователя или
                    адрес электронной почты.
                  </p>
                  <p className="mb-1">
                    {' '}
                    <b>Пароль *</b>{' '}
                  </p>
                  <Input
                    name="password"
                    type="password"
                    className="Auth-line-of-input"
                    placeholder="Password"
                  />
                  <p>В поле "Пароль" учитывается регистр.</p>

                  <Button htmlType="submit" className="Auth-sign-up-butto-two">
                    <p className="Auth-text-button"> ВХОД</p>
                  </Button>
                </div>
              </form>
            </TabPane>
            <TabPane tab="Напомнить пароль" key="3">
              <p className="Auth-paragraph">
                Имя пользователя или адрес электронной почты *:
              </p>
              <Input
                className="Auth-line-of-input"
                placeholder="Введите имя или адрес"
              />
              <div>
                <Button className="Auth-sign-up-button">
                  <p className="Auth-text-button "> ОТПРАВИТЬ</p>
                </Button>
              </div>
            </TabPane>
          </Tabs>
        </div>
      </div>
    </Spin>
  );
};

export default Auth;
