import '../styles/globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      disable: 'mobile'
    });
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
