import '../styles/globals.css';
import Head from 'next/head'
import Header from '../src/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Matheus | Dev</title>
    </Head>
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
