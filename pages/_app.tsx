import { ReactElement } from 'react';
import type { AppProps } from 'next/app';
import '../styles/normalize.css';
import '../uswds/css/styles.css';

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />;
}
export default MyApp;
