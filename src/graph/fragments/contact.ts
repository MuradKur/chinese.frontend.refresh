import { gql } from '@apollo/client';

export const CONTACT_FRAGMENT = gql`
  fragment contact on ContactType {
    id
    image
    type
    address
    city
    workTime
    phone
    email
    coordinates
  }
`;
