import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../components/Navbar/Navbar.css';
import { MoralisProvider } from 'react-moralis';

function MyApp({ Component, pageProps }) {
  return (
    <MoralisProvider
      appId="vgmRq7jcKe0JiIEfAFKrV2wzbviiq8AKKMhwTCN6"
      serverUrl="https://x0glef3ze8re.moralishost.com:2053/server"
    >
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp;
