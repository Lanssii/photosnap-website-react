import "./PricingCard.css";

function PricingCard({ title, price, desc, isActive }) {
  return (
    <div className={`pricing-card ${isActive ? "active" : ""}`}>
      <h3>{title}</h3>
      <p>{desc}</p>

      <h2 className="price">${price}.00</h2>
      <span>per month</span>

      <button className="btn">PICK PLAN</button>
    </div>
  );
}

export default PricingCard;
