import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeCarouselCard from "../HomeCarouselCard/HomeCarouselCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
import { HomeCardCarouselData } from "../HomeCarouselCard/homeCardCarouselData";

const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 5 },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const slideNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < HomeCardCarouselData.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const items = HomeCardCarouselData.map((item, index) => (
    <HomeCarouselCard key={index} image={item.image} />
  ));

  return (
    <div className="relative flex items-center justify-center mx-auto my-4">
      <div className="prev">
        <Button
          onClick={slidePrev}
          variant="contained"
          className={`w-16 ${activeIndex !== 0 ? "opacity-100" : "opacity-0"}`}
        >
          <ArrowBackIosNewIcon />
        </Button>
      </div>
      <div className="bg-slate-500 mx-0 w-[1160px] py-10 pb-0">
        <AliceCarousel
          items={items}
          disableDotsControls
          responsive={responsive}
          paddingLeft={50}
          mouseTracking
          keyboardNavigation
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
      </div>
      <div className="next">
        <Button
          onClick={slideNext}
          variant="contained"
          className={`w-16 ${
            activeIndex !== HomeCardCarouselData.length - 1
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <KeyboardArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;