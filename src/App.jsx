import React from 'react';
import {
  Provider,
  Client,
  defaultExchanges,
  subscriptionExchange,
} from 'urql';
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import BodyWrapper from './components/BodyWrapper';
import { Wrapper } from './styled-components/wrapper';
import Header from './components/Header';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: 'rgb(39,49,66)',
    },
    secondary: {
      main: 'rgb(197,208,222)',
    },
    background: {
      main: 'rgb(226,231,238)',
    },
  },
});

const subscriptionClient = new SubscriptionClient(
  'ws://react.eogresources.com/graphql',
  {
    reconnect: true,
    timeout: 20000,
  },
);

const client = new Client({
  url: 'https://react.eogresources.com/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation),
    }),
  ],
});

const App = () => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider value={client}>
      <Wrapper>
        <Header />
        <ToastContainer />
        <BodyWrapper />
      </Wrapper>
    </Provider>
  </MuiThemeProvider>
);

export default App;
