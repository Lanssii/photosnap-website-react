import "./StoryCard.css";

function StoryCard({ image, title, author, linkText }) {
  return (
    <>
      <div className="story-card" style={{ backgroundImage: `url(${image})` }}>
        <div className="story-info">
          <h4>{title}</h4>
          <p>{author}</p>
          <hr />
          <div className="invite-way">
            <a href="/invite" className="read-link">
              {linkText}
            </a>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryCard;
