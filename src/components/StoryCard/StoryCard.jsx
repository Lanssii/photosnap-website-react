import "./StoryCard.css";
import "../../assets/story-card1.png";

function StoryCard(props) {
  return (
    <>
      <div className="story-card">
        <div className="story-info">
          <h4>{props.title}</h4>
          <p>{props.author}</p>
          <hr />
          <div className="invite-way">
            <a href="/invite" className="read-link">
              {props.linkText}
            </a>
            <div className="arrow"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StoryCard;
