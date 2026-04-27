import "./Header.css";

function Header(props) {
  return (
    <>
      <header>
        <div className="header-container container">
          <a href="/home">
            <div className="main-logo">
              <img src={props.imgLogo} alt="main-logo" />
              <h2>{props.title}</h2>
            </div>
          </a>

          <nav>
            <ul>
              <li>
                <a href="/stories">{props.navText1}</a>
              </li>
              <li>
                <a href="/features">{props.navText2}</a>
              </li>
              <li>
                <a href="/pricing">{props.navText3}</a>
              </li>
            </ul>
          </nav>

          <button className="invite-button">{props.inviteBtn}</button>
        </div>
      </header>
    </>
  );
}

export default Header;
