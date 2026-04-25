import "./HeroSection.css";
import arrow from "../../assets/arrow.png";
import sectionImage from "../../assets/section-image1.png";

function HeroSection(props) {
  return (
    <>
      <section className="intro-section">
        <div className="left-section">
          <div className="left-section-info">
            <h1>{props.title}</h1>
            <p>{props.para}</p>
            <div className="invite-way">
              <a href="/invite" className="invite-link">
                {props.linkText}
              </a>
              <img src={arrow} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="right-section">
          <img src={sectionImage} alt="section-image" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
