import { gql } from '@apollo/client';
import { PRODUCT_FRAGMENT } from '../fragments/product';

export const GET_PRODUCTS = gql`
  query products($productId: Int) {
    products(productId: $productId) {
      ...product
    }
  }
  ${PRODUCT_FRAGMENT}
`;
