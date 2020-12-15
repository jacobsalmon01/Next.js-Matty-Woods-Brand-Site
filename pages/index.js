import Navbar from "components/Navbar";

const Index = (props) => {
  return (
    <>
      <style jsx global>{`
        body {
          background-image: url("/indexmatty.jpg");
          background-position: center -200px;
          background-attachment: fixed;
          font-family: Cinzel;
        }
        @font-face {
          font-family: "Cinzel";
          font-style: normal;
          src: local("Cinzel"), url("public/fonts/Cinzel-VariableFont_wght.ttf");
        }
      `}</style>
    </>
  );
};

export default Index;
