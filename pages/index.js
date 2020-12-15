import Navbar from "components/Navbar";

const Index = (props) => {
  return (
    <>
      <Navbar color="#f2e88e" />
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
