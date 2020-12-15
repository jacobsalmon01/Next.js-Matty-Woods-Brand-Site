import Navbar from "components/Navbar";
import Footer from "components/Footer";

const About = () => {
  return (
    <>
      <div>
        <Navbar clickColor="#A74D2E" />
        <Navbar hoverColor="#D7BA9A" />
        <Footer footerColor="#D7BA9A" />
      </div>
      <div className="content">
        <p>
          Matty Wood$ is a St. Louis Native who has molded his sound around
          elements of lyricism and catchy melodies to create music which has
          been proven unique to him. With an extensive variation in sounds, he
          is the perfect artist to relax and kick back to but has a catalog of
          fantastic production with heavy 808s, reminiscent of artists like
          Lucki, to give his catalogue more of a distinct sound.{" "}
        </p>
      </div>
      <style jsx global>{`
        body {
          background-image: url("/aboutmatty.jpeg");
          background-position: 0px -150px;
          height: 100vh;
          position: fixed;
          top: 64px;
          width: 100%;
        }
        .content {
          position: relative;
          margin-top: 78vh;
          z-index: 3;
          background-color: #454545;
          color: #d7ba9a;
          display: block;
          font-family: Cinzel;
          padding-left: 30px;
          padding-right: 30px;
          padding-top: 15px;
          padding-bottom: 15px;
          text-align: center;
        }
      `}</style>
    </>
  );
};

export default About;
