import Link from "next/link";

export default function Navbar(props) {
  return (
    <ul className="navbar">
      <li>
        <Link href="/">
          <a>HOME</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>ABOUT</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>CONTACT</a>
        </Link>
      </li>
      <li>
        <Link href="/gallery">
          <a>GALLERY</a>
        </Link>
      </li>
      <style jsx>{`
        .body {
          margin: 0 !important;
          padding: 0 !important;
        }
        .navbar {
          background-color: #212121;
          overflow: hidden;
          color: #454545;
          font-size: 25px;
          font-weight: 500;
          font-family: Cinzel;
          position: fixed;
          margin: 0;
          padding: 0;
          top: 0;
          display: block;
          width: 100%;
          list-style-type: none;
        }
        .navbar a {
          float: left;
          display: block;
          color: #454545;
          text-decoration: none;
          text-align: center;
          padding: 0px 0px;
          border-bottom: 3px solid transparent;
          padding: 14px 16px;
        }
        .navbar a:hover {
          border-bottom: 3px solid #f2e88e;
          transition: all 0.3s;
          color: #f2e88e;
        }
        .navbar a:active {
          border-bottom: 3px solid #999041;
          color: #999041;
        }
      `}</style>
    </ul>
  );
}
