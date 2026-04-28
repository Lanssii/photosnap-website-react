import HeroSection from "../components/HeroSection/HeroSection.jsx";
import pricingImage from "../assets/pricing-hero.png";

function Pricing() {
  return (
    <main>
      <HeroSection
        title="PRICING"
        para="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        sectionImageOne={pricingImage}
        backgroundColor="#000"
      />
    </main>
  );
}

export default Pricing;
