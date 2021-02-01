import Layout from '../components/Layout';
import Header from '../components/Header';
import Github from '../components/Github';
import '../styles/globals.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Github />
    </>
  );
}

export default MyApp;
