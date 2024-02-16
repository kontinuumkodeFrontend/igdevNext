import Head from "next/head";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/css/style.min.css";
import "./Assets/css/home.min.css";
import "./Assets/css/slick.min.css";
import "./Assets/css/slick-theme.min.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Components/Header";
import Provider from "./Components/Provider";
import Footer from "./Components/Footer";
import { getPageMetaTitle } from "./Components/PageMetaTitle";
import { homeMeta } from "./services/metaTags";
import StripeWrapper from "./Components/StripeWrapper";

const metadataInner = getPageMetaTitle({ data: homeMeta });

export const metadata = metadataInner;

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />

        <link
          rel="preload"
          href="/slick-theme.min.css"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
        <link
          rel="preload"
          href="/style.min.css"
          as="style"
          onload="this.onload=null;this.rel='stylesheet'"
        />
      </Head>
      <body>
        <Provider>
          <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{ textTransform: "capitalize" }}
          />
        <StripeWrapper>
          <Header />
          {children}
          <Footer />
          </StripeWrapper>
        </Provider>
      </body>
    </html>
  );
}
