import Navbar from "components/Navbar";
import Footer from "components/Footer";
import App from "next/app";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <style jsx global>{`
        body {
          margin: 0px;
          padding: 0px;
        }
      `}</style>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
