import { gql } from '@apollo/client';
import { NEWS_FRAGMENT } from '../fragments/News';

export const GET_NEWS = gql`
  query news {
    news {
      ...news
    }
  }
  ${NEWS_FRAGMENT}
`;
