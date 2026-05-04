import HeroSection from "../components/HeroSection/HeroSection.jsx";
import PricingSection from "../components/PricingSection/PricingSection.jsx";
import CompareTable from "../components/CompareTable/CompareTable.jsx";
import pricingImage from "../assets/pricing-hero.png";

import HeroSmall from "../assets/hero-small-img.jpg";

function Pricing() {
  return (
    <main>
      <HeroSection
        title="PRICING"
        para="Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos."
        sectionImageOne={pricingImage}
        backgroundColor="#000"
      />
      <PricingSection />
      <CompareTable />

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

export default Pricing;
