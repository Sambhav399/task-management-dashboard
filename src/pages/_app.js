import react from 'react';
import '../../styles/globals.css';
import PageHead from '../components/pageHead';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <PageHead />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
