import "./StorySection.css";
import StoryCard from "../StoryCard/StoryCard.jsx";

import storyCard1 from "../../assets/story-card1.png";
import storyCard2 from "../../assets/story-card2.png";
import storyCard3 from "../../assets/story-card3.png";
import storyCard4 from "../../assets/story-card4.png";
import storyCard5 from "../../assets/story-card5.png";

function StorySection() {
  return (
    <>
      <section className="story-section ">
        <div className="grid-cards">
          <StoryCard
            title="The Mountains"
            author="by John Appleseed"
            linkText="READ STORY"
            image={storyCard1}
          />
          <StoryCard
            title="Sunset Cityscapes"
            author="by Benjamin Cruz"
            linkText="READ STORY"
            image={storyCard2}
          />
          <StoryCard
            title="18 Days Voyage"
            author="by Alexei Borodin"
            linkText="READ STORY"
            image={storyCard3}
          />
          <StoryCard
            title="Architecturals"
            author="by John Appleseed"
            linkText="READ STORY"
            image={storyCard4}
          />
          <StoryCard
            title="World Tour 2019"
            author="by Timothy Wagner"
            linkText="READ STORY"
            image={storyCard5}
          />
        </div>
      </section>
    </>
  );
}

export default StorySection;
