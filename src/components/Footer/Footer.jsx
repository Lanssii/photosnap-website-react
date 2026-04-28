import "./Footer.css";

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
                <h2>PHOTOSNAP</h2>
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
                    <a href="/home">HOME</a>
                  </li>
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
            </div>
          </div>
          <div className="footer-right-section">
            <div className="invite-way">
              <a href="/invite" className="invite-link">
                GET AN INVITE
              </a>
              <div className="arrow"></div>
            </div>
            <p className="footer-copyright">
              Copyright 2019. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
