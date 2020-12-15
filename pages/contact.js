import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Contact = () => {
  return (
    <>
      <div>
        <Navbar clickColor="#592837" />
        <Navbar hoverColor="#E2909F" />
        <Footer footerColor="#E2909F" />
      </div>
      <style jsx global>{`
        body {
          background-image: url("/contactmatty.jpeg");
          background-position: 50px 100px;
          height: 100vh;
          position: fixed;
          top: 64px;
          width: 100%;
        }
      `}</style>
    </>
  );
};

export default Contact;
