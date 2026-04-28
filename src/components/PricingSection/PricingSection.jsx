import "./PricingSection.css";
import PricingCard from "../PricingCard/PricingCard.jsx";

function PricingSection() {
  return (
    <section className="pricing-section pricing-cards">
      <PricingCard
        title="Basic"
        price="19"
        desc="Includes basic usage of our platform. Recommended for new and aspiring photographers."
      />
      <PricingCard
        title="Pro"
        price="39"
        desc="More advanced features available. Recommended for photography veterans and professionals."
        isActive={true}
      />
      <PricingCard
        title="Business"
        price="99"
        desc="Additional features available such as more detailed metrics. Recommended for business owners."
      />
    </section>
  );
}

export default PricingSection;
