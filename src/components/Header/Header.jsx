import "./Header.css";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <>
      <header>
        <div className="header-container container">
          <Link to="/">
            <div className="main-logo">
              <img src={props.imgLogo} alt="main-logo" />
              <h2>{props.title}</h2>
            </div>
          </Link>

          <nav>
            <ul>
              <li>
                <Link to="/stories">{props.navText1}</Link>
              </li>
              <li>
                <Link to="/features">{props.navText2}</Link>
              </li>
              <li>
                <Link to="/pricing">{props.navText3}</Link>
              </li>
            </ul>
          </nav>

          <a href="/pricing" className="invite-button">
            {props.inviteBtn}
          </a>
        </div>
      </header>
    </>
  );
}

export default Header;
