import Link from "next/link";

export default function Footer({ footerColor }) {
  console.log({ footerColor });
  return (
    <ul
      className="footer"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <li>
        <li>
          <a href="https://instagram.com/mattywoodsss" class="active">
            INSTAGRAM
          </a>
        </li>
        <li>
          <a href="https://twitter.com/fucktheswishers" class="active">
            TWITTER
          </a>
        </li>
        <li>
          <a href="#snapchat" class="active">
            SNAPCHAT
          </a>
        </li>
        <li>
          <a href="https://mattywoods.co" class="active">
            OFFICIAL SITE
          </a>
        </li>
        <li>COPYRIGHT JAKE SALMON, PHILADELPHIA PA, DECEMBER 2020</li>
      </li>
      <style jsx>{`
        .footer {
          position: fixed;
          left: 0;
          bottom: 0;
          width: 100%;
          text-align: center;
          font-family: Inconsolata;
          color: ${footerColor};
          list-style-type: none;
        }
        .footer a {
          text-decoration: none !important;
          color: ${footerColor};
          text-align: center;
        }
      `}</style>
    </ul>
  );
}
