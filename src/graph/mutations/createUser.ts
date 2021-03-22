import { gql } from '@apollo/client';
import { USER_FRAGMENT } from '../fragments/user';
import { PROFILE_FRAGMENT } from '../fragments/profile';

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      user {
        ...user
      }
      profile {
        ...profile
      }
      token
      refreshToken
    }
  }
  ${USER_FRAGMENT}
  ${PROFILE_FRAGMENT}
`;
