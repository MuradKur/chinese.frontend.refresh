import { gql } from '@apollo/client';

export const USER_FRAGMENT = gql`
  fragment user on UserType {
    id
    password
    lastLogin
    isSuperuser
    username
    firstName
    lastName
    email
    isStaff
    isActive
    dateJoined
  }
`;
