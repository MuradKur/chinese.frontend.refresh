import { gql } from '@apollo/client';
import { USER_FRAGMENT } from '../fragments/user';

export const GET_USERS = gql`
  query users {
    users {
      ...user
    }
  }
  ${USER_FRAGMENT}
`;
