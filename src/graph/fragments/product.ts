import { gql } from '@apollo/client';

export const PRODUCT_FRAGMENT = gql`
  fragment product on ProductType {
    id
    title
    image
    description
    brand
    quantity
    price
  }
`;
