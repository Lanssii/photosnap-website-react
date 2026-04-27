import "./InfoCard.css";
function InfoCard({ image, title, para }) {
  return (
    <>
      <div className="info-card">
        <img src={image} alt="info-icon" />
        <h1>{title}</h1>
        <p>{para}</p>
      </div>
    </>
  );
}

export default InfoCard;
