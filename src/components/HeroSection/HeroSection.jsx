import "./HeroSection.css";

function HeroSection(props) {
  return (
    <>
      <section className={`intro-section ${props.reverse ? "reverse" : ""}`}>
        <div
          className="left-section"
          style={{ backgroundColor: props.backgroundColor }}
        >
          <div className="left-section-info">
            <h1 style={{ color: props.titleColor }}>{props.title}</h1>
            <p>{props.para}</p>
            <div className="invite-way">
              <a
                href="/invite"
                className="invite-link"
                style={{ color: props.linkColor }}
              >
                {props.linkText}
              </a>
              <div
                className="arrow"
                style={{ "--arrow-color": props.arrowBackgroundColor }}
              ></div>
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
