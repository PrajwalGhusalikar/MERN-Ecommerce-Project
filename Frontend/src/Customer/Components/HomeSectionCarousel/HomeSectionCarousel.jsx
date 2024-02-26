import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeCarouselCard from "../HomeCarouselCard/HomeCarouselCard";


const HomeSectionCarousel = ({data, heading}) => {
  const responsive = {
    0: { items: 2 },
    568: { items: 2 },
    1024: { items: 5 },
  };

  const items = data.map((item, index) => (
    <HomeCarouselCard
      key={index}
      image={item.image}
      brand={item.brand}
      title={item.title}
    />
  ));

  return (
    <div className="relative flex sm:items-center justify-center mx-auto my-4">
      
      <div className="mx-0 sm:w-[1160px] w-[340px]  pb-0">
      <h2 className="text-3xl font-bold sm:px-3">{heading}</h2>
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
          mouseTracking
          keyboardNavigation
        />
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
