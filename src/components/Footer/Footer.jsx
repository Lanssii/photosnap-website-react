import "./Footer.css";

import FacebookIcon from "../../assets/facebook-icon.png";
import YoutubeIcon from "../../assets/youtube-icon.png";
import TwitterIcon from "../../assets/twitter-icon.png";
import PinterestIcon from "../../assets/pinterest-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-left-section">
            <div>
              <h1>Photosnap</h1>
              <div className="footer-icons">
                <img src={FacebookIcon} alt="" />
                <img src={YoutubeIcon} alt="" />
                <img src={TwitterIcon} alt="" />
                <img src={PinterestIcon} alt="" />
                <img src={InstagramIcon} alt="" />
              </div>
            </div>
            <div></div>
          </div>
          <div className="footer-right-section"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
