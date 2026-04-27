import "./StorySection.css";
import "../../assets/story-card1.png";

function StorySection() {
  return (
    <>
      <section className="story-section">
        <div className="story-card">
          <div className="story-info">
            <h4>The Mountains</h4>
            <p>by John Appleseed</p>
            <hr />
            <div className="invite-way">
              <a href="/invite" className="read-link">
                READ STORY
              </a>
              <div className="arrow"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default StorySection;
