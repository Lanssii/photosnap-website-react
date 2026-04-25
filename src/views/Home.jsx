import HeroSection from "../components/HeroSection/HeroSection.jsx";
import arrowImage from "../assets/arrow.png";
import sectionImageOne from "../assets/section-image1.png";

function Home() {
  return (
    <>
      <main>
        <HeroSection
          title="CREATE AND SHARE YOUR PHOTO STORIES"
          para=" Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others."
          linkText="GET AN INVITE"
          arrowImg={arrowImage}
          sectionImageOne={sectionImageOne}
        />
        <HeroSection
          title="CREATE AND SHARE YOUR PHOTO STORIES"
          para=" Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others."
          linkText="GET AN INVITE"
          arrowImg={arrowImage}
          sectionImageOne={sectionImageOne}
          reverse={true}
        />
      </main>
    </>
  );
}

export default Home;
