import React from 'react';
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import MetricsMain from './components/metrics/MetricsMain';
import LineGraphMain from './components/line-graphs/LineGraphMain';
import { SubscriptionClient } from "subscriptions-transport-ws";
import { Provider, Client, defaultExchanges, subscriptionExchange } from 'urql';

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
  "ws://react.eogresources.com/graphql",
  {
    reconnect: true,
    timeout: 20000
  }
)

const client = new Client({
  url: 'https://react.eogresources.com/graphql',
  exchanges: [
    ...defaultExchanges,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation),
    }),
  ],
});

const App = props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
      <Provider value={client}>
        <Wrapper>
          <Header />
          <ToastContainer />
          <MetricsMain />
          <LineGraphMain />
        </Wrapper>
      </Provider>
  </MuiThemeProvider>
);

export default App;
