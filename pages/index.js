import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Index = (props) => {
  return (
    <>
      <div>
        <Navbar clickColor="#999041" />
        <Navbar hoverColor="#F2E88E" />
        <Footer footerColor="#F2E88E" />
      </div>
      <style jsx global>{`
        body {
          background-image: url("/indexmatty.jpg");
          background-position: center -200px;
          background-attachment: fixed;
          font-family: Cinzel;
        }
      `}</style>
    </>
  );
};

export default Index;
