import "./PricingSection.css";
import PricingCard from "../PricingCard/PricingCard.jsx";

function PricingSection() {
  return (
    <section className="pricing-section pricing-cards">
      <PricingCard title="Basic" price="19" desc="Includes basic usage..." />
      <PricingCard
        title="Pro"
        price="39"
        desc="More advanced features..."
        isActive={true}
      />
      <PricingCard title="Business" price="99" desc="Additional features..." />
    </section>
  );
}

export default PricingSection;
