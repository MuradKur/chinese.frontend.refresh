import { gql } from '@apollo/client';
import { NEWS_FRAGMENT } from '../fragments/news';

export const GET_NEWS = gql`
  query news {
    news {
      ...news
    }
  }
  ${NEWS_FRAGMENT}
`;
