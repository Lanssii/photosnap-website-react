import { useState } from "react";
import "./PricingSection.css";
import PricingCard from "../PricingCard/PricingCard.jsx";

function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const changeBtn = () => {
    setIsYearly((prev) => !prev);
  };

  return (
    <section className="pricing-section pricing-cards">
      <div className="price-button">
        <div className="toggle-wrapper">
          <span className={!isYearly ? "label active" : "label"}>Monthly</span>

          <label className="switch">
            <input type="checkbox" onChange={changeBtn} />
            <span className="slider"></span>
          </label>

          <span className={isYearly ? "label active" : "label"}>Yearly</span>
        </div>
      </div>
      <div className="price-cards">
        <PricingCard
          title="Basic"
          price={isYearly ? 19 * 10 : 19}
          desc="Includes basic usage of our platform. Recommended for new and aspiring photographers."
        />
        <PricingCard
          title="Pro"
          price={isYearly ? 39 * 10 : 39}
          desc="More advanced features available. Recommended for photography veterans and professionals."
          isActive={true}
        />
        <PricingCard
          title="Business"
          price={isYearly ? 99 * 10 : 99}
          desc="Additional features available such as more detailed metrics. Recommended for business owners."
        />
      </div>
    </section>
  );
}

export default PricingSection;
