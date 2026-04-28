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
        date="March 2nd 2020"
        author="by John Appleseed"
        para="The dissected plateau area, while not actually made up of geological mountains, is popularly called 'mountains,' especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged."
        linkText="READ THE STORY"
      />
      <StorySection />
      <StorySection />
      <StorySection />
      <StorySection />
    </main>
  );
}

export default Stories;
