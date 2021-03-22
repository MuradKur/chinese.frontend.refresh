import { gql } from '@apollo/client';

export const VERIFY_TOKEN_AUTH = gql`
  mutation verifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`;
