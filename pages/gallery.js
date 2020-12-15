import Navbar from "components/Navbar";
import Footer from "components/Footer";

const Gallery = () => {
  return (
    <>
      <div>
        <Navbar clickColor="#183568" />
        <Navbar hoverColor="#5C7FBC" />
        <Footer footerColor="#5C7FBC" />
      </div>
      <style jsx global>{`
        body {
          background-color: #959ba5;
        }
        .gunpic {
          margin-left: 30px;
          margin-top: 100px;
          margin-bottom: 250px;
        }
        .storepic {
          margin-left: 20px;
          margin-bottom: 450px;
          margin-top: 0px;
        }
        .performpic {
          margin-left: 20px;
          margin-top: 100px;
          margin-bottom: 450px;
        }
        .darkpic {
          margin-left: 450px;
          margin-bottom: 450px;
          margin-top: -425px;
        }
      `}</style>
      <img className="gunpic" src="/matty4.jpeg" width="400" height="560" />
      <img className="storepic" src="/matty2.jpeg" width="250" height="355" />
      <img className="performpic" src="/matty1.jpeg" width="540" height="350" />
      <img className="darkpic" src="/matty3.jpeg" width="800" height="520" />
    </>
  );
};

export default Gallery;
