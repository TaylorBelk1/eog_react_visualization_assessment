import React from 'react';
import { ToastContainer } from 'react-toastify';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Wrapper from './components/Wrapper';
import MetricsMain from './components/metrics/MetricsMain';
import LineGraphMain from './components/line-graphs/LineGraphMain';
import { Provider, createClient } from 'urql';


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

const client = createClient({
  url: 'https://react.eogresources.com/graphql',
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
