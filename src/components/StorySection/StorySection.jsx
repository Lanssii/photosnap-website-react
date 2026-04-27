import "./StorySection.css";
import StoryCard from "../StoryCard/StoryCard.jsx";

function StorySection() {
  return (
    <>
      <section className="story-section ">
        <div className="grid-cards">
          <StoryCard
            title="The Mountains"
            author="by John Appleseed"
            linkText="READ STORY"
          />
          <StoryCard
            title="The Mountains"
            author="by John Appleseed"
            linkText="READ STORY"
          />
          <StoryCard
            title="The Mountains"
            author="by John Appleseed"
            linkText="READ STORY"
          />
          <StoryCard
            title="The Mountains"
            author="by John Appleseed"
            linkText="READ STORY"
          />
          <StoryCard
            title="The Mountains"
            author="by John Appleseed"
            linkText="READ STORY"
          />
        </div>
      </section>
    </>
  );
}

export default StorySection;
