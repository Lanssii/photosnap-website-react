import "./Header.css";
import logo from "../../assets/main-logo.png";

function Header() {
  return (
    <>
      <header>
        <div className="header-container container">
          <a href="/home">
            <div className="main-logo">
              <img src={logo} alt="main-logo" />
              <h2>PHOTOSNAP</h2>
            </div>
          </a>

          <nav>
            <ul>
              <li>
                <a href="/stories">STORIES</a>
              </li>
              <li>
                <a href="/features">FEATURES</a>
              </li>
              <li>
                <a href="/pricing">PRICING</a>
              </li>
            </ul>
          </nav>

          <button className="invite-button">GET AN INVITE</button>
        </div>
      </header>
    </>
  );
}

export default Header;
