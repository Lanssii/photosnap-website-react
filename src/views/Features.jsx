import HeroSection from "../components/HeroSection/HeroSection.jsx";
import InfoSection from "../components/InfoSection/InfoSection.jsx";
import featuresImage from "../assets/features-intro.png";

import HeroSmall from "../assets/hero-small-img.jpg";

function Features() {
  return (
    <main>
      <HeroSection
        title="FEATURES"
        para="We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories."
        sectionImageOne={featuresImage}
        backgroundColor="#000"
      />
      <InfoSection />
      <InfoSection />

      <HeroSection
        overlay={true}
        storiesImage={HeroSmall}
        title="WE'RE IN BETA.GET YOUR INVITE TODAY!"
        linkText="GET AN INVITE"
        size="small"
      />
    </main>
  );
}

export default Features;
