import { Provider } from 'react-redux';
import Head from 'next/head';
import { Fragment } from 'react';
import store from './store/store';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../plugins/theme';
import Header from '../components/Layout/Header';

function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Book Share</title>
        <link rel='icon' href='/favicon.png' />
      </Head>

      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Header />
          <Component {...pageProps} />
        </Provider>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
