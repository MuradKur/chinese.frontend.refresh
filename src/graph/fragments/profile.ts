import { gql } from '@apollo/client';
import { USER_FRAGMENT } from './user';

export const PROFILE_FRAGMENT = gql`
  fragment profile on UserProfile {
    id
    user {
      ...user
    }
    role
  }
  ${USER_FRAGMENT}
`;
