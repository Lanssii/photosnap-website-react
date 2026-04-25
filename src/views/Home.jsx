import HeroSection from "../components/HeroSection/HeroSection.jsx";

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
        />
        {/* <HeroSection /> */}
      </main>
    </>
  );
}

export default Home;
