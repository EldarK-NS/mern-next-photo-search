import '../styles/globals.css';
import React from 'react';
import { wrapper } from '../redux/store';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component  {...pageProps} />
    </Layout>
  )

}

export default wrapper.withRedux(MyApp)
