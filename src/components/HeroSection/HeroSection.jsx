import "./HeroSection.css";

function HeroSection(props) {
  return (
    <>
      <section className={`intro-section ${props.reverse ? "reverse" : ""}`}>
        <div className="left-section">
          <div className="left-section-info">
            <h1>{props.title}</h1>
            <p>{props.para}</p>
            <div className="invite-way">
              <a href="/invite" className="invite-link">
                {props.linkText}
              </a>
              <img src={props.arrowImg} alt="arrow" />
            </div>
          </div>
        </div>
        <div className="right-section">
          <img src={props.sectionImageOne} alt="section-image" />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
