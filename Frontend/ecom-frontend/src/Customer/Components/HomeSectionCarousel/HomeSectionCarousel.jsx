import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeCarouselCard from "../HomeCarouselCard/HomeCarouselCard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Button from "@mui/material/Button";
const HomeSectionCarousel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 3 },
    1024: { items: 6 },
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const slidePrev = () => {
    setActiveIndex(activeIndex - 1);
  };
  const slideNext = () => {
    setActiveIndex(activeIndex + 1);
  };
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = [1, 1, 1, 1, 1, 1, 1, 1].map((items) => <HomeCarouselCard />);

  return (
    <div className=" relative mx-auto ">
      <div className="relative bg-slate-500 mx-10 w-[1350px] pt-10">
        <AliceCarousel
          items={items}
          disableButtonsControls
          autoPlay
          autoPlayInterval={1000}
          infinite
          responsive={responsive}
          paddingLeft={50}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
        />
        <Button
          onClick={slidePrev}
          variant="contained"
          className="absolute -translate-y-40"
        >
          <ArrowBackIosNewIcon />
        </Button>
        <Button
          onClick={slideNext}
          variant="contained"
          className="absolute translate-x-[1220px] -translate-y-40"
        >
          <KeyboardArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
