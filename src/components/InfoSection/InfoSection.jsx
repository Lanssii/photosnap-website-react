import "./InfoSection.css";
import InfoCard from "../InfoCard/InfoCard.jsx";

import InfoCard1 from "../../assets/Info-card-icon1.png";
import InfoCard2 from "../../assets/Info-card-icon2.png";
import InfoCard3 from "../../assets/Info-card-icon3.png";

function InfoSection() {
  return (
    <>
      <section className="info-cards">
        <InfoCard
          image={InfoCard1}
          title="100% Responsive"
          para="No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen."
        />
        <InfoCard
          image={InfoCard2}
          title="No Photo Upload Limit"
          para="Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go."
        />
        <InfoCard
          image={InfoCard3}
          title="Available to Embed"
          para="Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. "
        />
      </section>
    </>
  );
}

export default InfoSection;
