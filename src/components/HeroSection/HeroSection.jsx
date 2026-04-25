import "./HeroSection.css";
import arrow from "../../assets/arrow.png";
import sectionImage from "../../assets/section-image1.png";

function HeroSection() {
  return (
    <>
      <main>
        <section className="intro-section">
          <div className="left-section">
            <div className="left-section-info">
              <h1>CREATE AND SHARE YOUR PHOTO STORIES</h1>
              <p>
                Photosnap is a platform for photographers and visual
                storytellers. We make it easy to share photos, tell stories and
                connect with others.
              </p>
              <div className="invite-way">
                <a href="/invite" className="invite-link">
                  GET AN INVITE
                </a>
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          </div>
          <div className="right-section">
            <img src={sectionImage} alt="section-image" />
          </div>
        </section>
      </main>
    </>
  );
}

export default HeroSection;
