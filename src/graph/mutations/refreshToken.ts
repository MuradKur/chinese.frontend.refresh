import { gql } from '@apollo/client';

export const REFRESH_TOKEN_AUTH = gql`
  mutation refreshToken($token: String!) {
    refreshToken(token: $token) {
      payload
      token
    }
  }
`;
