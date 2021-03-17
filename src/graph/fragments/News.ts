import { gql } from '@apollo/client';

export const NEWS_FRAGMENT = gql`
  fragment news on NewsType {
    id
    title
    preview
    content
    dateCreated
    showMain
  }
`;
