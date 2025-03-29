import Categories from "../elements/Categories";
import ImageSections from "../module/ImageSections";
import SpecialOffers from "../module/SpecialOffers";

const HomePage = () => {
  return (
    <div>
      <Categories />
      <SpecialOffers />
      <ImageSections/>
    </div>
  );
};

export default HomePage;
