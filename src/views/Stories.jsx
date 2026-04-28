import HeroSection from "../components/HeroSection/HeroSection.jsx";
import StorySection from "../components/StorySection/StorySection.jsx";

import storiesImage from "../assets/stories-hero.png";

function Stories() {
  return (
    <main>
      <HeroSection
        overlay={true}
        storiesImage={storiesImage}
        topText="LAST MONTH’S FEATURED STORY"
        title="HAZY FULL MOON OF APPALACHIA"
      />
      <StorySection />
      <StorySection />
      <StorySection />
      <StorySection />
    </main>
  );
}

export default Stories;
