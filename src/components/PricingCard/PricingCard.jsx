import "./PricingCard.css";

function PricingCard({ title, price, desc, isActive }) {
  return (
    <div className={`pricing-card ${isActive ? "active" : ""}`}>
      <h2>{title}</h2>
      <p>{desc}</p>

      <div className="price-offer">
        <h2 className="price">${price}.00</h2>
        <span>per month</span>
      </div>

      <button className="btn">PICK PLAN</button>
    </div>
  );
}

export default PricingCard;
