import "./HeroSection.css";

function HeroSection(props) {
  return (
    <>
      <section className={`intro-section ${props.reverse ? "reverse" : ""}`}>
        {props.overlay ? (
          <div
            className="overlay-hero"
            style={{ backgroundImage: `url(${props.storiesImage})` }}
          >
            <div className="overlay-content">
              {props.topText && (
                <span className="top-text">{props.topText}</span>
              )}
              <h1>{props.title}</h1>
              <div className="date-author">
                <p>{props.date}</p>
                <p className="author">{props.author}</p>
              </div>
              <p>{props.para}</p>

              <div className="invite-way">
                <a href="/stories">{props.linkText}</a>
                <div className="arrow"></div>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div
              className="left-section"
              style={{ backgroundColor: props.backgroundColor }}
            >
              <div className="left-section-info">
                {props.topText && (
                  <span className="top-text">{props.topText}</span>
                )}
                <h1 style={{ color: props.titleColor }}>{props.title}</h1>
                <p>{props.para}</p>
                <div className="invite-way">
                  <a
                    href="/stories"
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
          </>
        )}
      </section>
    </>
  );
}

export default HeroSection;
