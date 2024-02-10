import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeCarouselCard from "../HomeCarouselCard/HomeCarouselCard";
const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 4 },
  };
  const items = [1, 2, 3, 4, 5, 6, 7, 8].map((items) => <HomeCarouselCard />);
  return (
    <div>
      <AliceCarousel
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
      ;
    </div>
  );
};

export default HomeSectionCarousel;
