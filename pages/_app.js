import PropTypes from 'prop-types';
// import 'Styles/globals.css';
import { SWRConfig } from 'swr';
import { disableReactDevTools } from 'Lib/disable-react-devtools';

import { ChakraProvider, extendTheme, Container } from '@chakra-ui/react';
import myTheme from 'Styles/theme';

import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

const theme = extendTheme(myTheme);
const fetcher = (...args) => fetch(...args).then((res) => res.json());

function MyApp({ Component, pageProps }) {
  if (process.env.NODE_ENV === 'production') {
    disableReactDevTools();
  }
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false,
        shouldRetryOnError: false,
      }}
    >
      <ChakraProvider theme={theme}>
        <Container maxW="1440px">
          <DefaultSeo {...SEO} />
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </SWRConfig>
  );
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  Component: {},
  pageProps: {},
};

export default MyApp;
