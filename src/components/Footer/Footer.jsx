import "./Footer.css";
import { Link } from "react-router-dom";

import FacebookIcon from "../../assets/facebook-icon.png";
import YoutubeIcon from "../../assets/youtube-icon.png";
import TwitterIcon from "../../assets/twitter-icon.png";
import PinterestIcon from "../../assets/pinterest-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";

function Footer(props) {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-left-section">
            <div>
              <div className="main-logo">
                <img src={props.imgLogo} alt="main-logo" />
                <h2>{props.title}</h2>
              </div>
              <div className="footer-icons">
                <img src={FacebookIcon} alt="facebook-icon" />
                <img src={YoutubeIcon} alt="youtube-icon" />
                <img src={TwitterIcon} alt="twitter-icon" />
                <img src={PinterestIcon} alt="pinterest-icon" />
                <img src={InstagramIcon} alt="instagram-icon" />
              </div>
            </div>
            <div>
              <nav className="footer-nav">
                <ul>
                  <li>
                    <Link to="/">{props.navText1}</Link>
                  </li>
                  <li>
                    <Link to="/stories">{props.navText2}</Link>
                  </li>
                  <li>
                    <Link to="/features">{props.navText3}</Link>
                  </li>
                  <li>
                    <Link to="/pricing">{props.navText4}</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="footer-right-section">
            <div className="invite-way">
              <a href="/invite" className="invite-link">
                {props.inviteBtn}
              </a>
              <div className="arrow"></div>
            </div>
            <p className="footer-copyright">{props.copyright}</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
