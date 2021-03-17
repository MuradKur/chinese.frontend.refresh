import { gql } from '@apollo/client';

export const ACTION_FRAGMENT = gql`
  fragment action on ActionType {
    id
    date
    title
    image
    body
    status
  }
`;
