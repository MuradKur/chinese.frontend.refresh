import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App/App';
import configureApolloo from './configureApollo';
import store from './store';
import { CookiesProvider } from 'react-cookie';

export const client = configureApolloo();

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <App />
        </ApolloProvider>
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
