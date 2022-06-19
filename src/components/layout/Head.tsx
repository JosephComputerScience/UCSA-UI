// external imports
import Head from 'next/head';
import { FunctionComponent } from 'react';

/**
 * Creates a head tag for application.
 */
export const Header: FunctionComponent = () => (
  <Head>
    <title>UCSA</title>
    <meta
      content="initial-scale=1.0, width=device-width"
      key="viewport"
      name="viewport"
    />
  </Head>
);
