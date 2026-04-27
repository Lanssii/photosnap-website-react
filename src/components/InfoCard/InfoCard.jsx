import "./InfoCard.css";
function InfoCard({ image, title, para }) {
  return (
    <>
      <div className="info-card">
        <div className="image-container">
          <img src={image} alt="info-icon" />
        </div>
        <h3>{title}</h3>
        <p>{para}</p>
      </div>
    </>
  );
}

export default InfoCard;
