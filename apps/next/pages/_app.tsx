import { AppProps } from 'next/app';
import Head from 'next/head';
//import Header from '../../../libs/ui/src/lib/header';
import { Nav, Header } from '@futbol-pro/ui'
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>FutbolPro</title>
      </Head>
      <div className="app">
        <main>
          <Header/>
          <Nav/>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
