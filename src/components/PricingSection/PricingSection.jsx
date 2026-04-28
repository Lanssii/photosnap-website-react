import "./PricingSection.css";
import PricingCard from "../PricingCard/PricingCard.jsx";

function PricingSection() {
  return (
    <section className="pricing-section pricing-cards">
      <div className="price-button">
        <div className="toggle-wrapper">
          <span className="label active">Monthly</span>

          <label className="switch">
            <input type="checkbox" />
            <span className="slider"></span>
          </label>

          <span className="label">Yearly</span>
        </div>
      </div>
      <div className="price-cards">
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
      </div>
    </section>
  );
}

export default PricingSection;
