import {
  ApolloClient,
  ApolloLink,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const URL = 'https://app.china-parts.ru/graphql/';

const configureApolloo = () => {
  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ message, locations, path }) =>
        console.log(
          `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
        ),
      );
    if (networkError) console.log(`[Network error]: ${networkError}`);
  });
  const httpLink = new HttpLink({
    uri: URL,
  });

  const cache = new InMemoryCache();
  const link = ApolloLink.from([httpLink, errorLink]);

  const client = new ApolloClient({
    link: link,
    uri: URL,
    headers: {
      'Cache-Control': 'no-cache',
    },
    cache,
  });

  return client;
};

export default configureApolloo;
