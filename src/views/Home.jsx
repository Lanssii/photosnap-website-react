import HeroSection from "../components/HeroSection/HeroSection.jsx";
import sectionImageOne from "../assets/hero-section-image1.png";
import sectionImageTwo from "../assets/hero-section-image2.png";
import sectionImageThree from "../assets/hero-section-image3.png";

import StorySection from "../components/StorySection/StorySection.jsx";
import InfoSection from "../components/InfoSection/InfoSection.jsx";

function Home() {
  return (
    <>
      <main>
        <HeroSection
          title="CREATE AND SHARE YOUR PHOTO STORIES"
          para="Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others."
          linkText="GET AN INVITE"
          sectionImageOne={sectionImageOne}
          backgroundColor="#000"
          titleColor="#ffffff"
          linkColor="#ffffff"
          arrowBackgroundColor="#ffffff"
        />
        <HeroSection
          title="BEAUTIFUL STORIES EVERY TIME"
          para="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
          linkText="VIEW THE STORIES"
          sectionImageOne={sectionImageTwo}
          titleColor="#000000"
          linkColor="#000000"
          arrowBackgroundColor="#000000"
          reverse={true}
        />
        <HeroSection
          title="DESIGNED FOR EVERYONE"
          para="Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it."
          linkText="VIEW THE STORIES"
          sectionImageOne={sectionImageThree}
          titleColor="#000000"
          linkColor="#000000"
          arrowBackgroundColor="#000000"
        />

        <StorySection />
        <InfoSection />
      </main>
    </>
  );
}

export default Home;
