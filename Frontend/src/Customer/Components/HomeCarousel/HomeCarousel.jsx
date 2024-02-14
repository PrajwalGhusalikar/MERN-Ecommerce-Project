import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { carouselData } from "./carouselData";
import { Carousel } from "@material-tailwind/react";
const items = carouselData.map((items) => (
  <img width={"100%"} src={items.img} alt="" />
));

const HomeCarousel = () => {
  return (
    <div className="mt-10">
      <Carousel
        className="rounded-xl"
        autoplay={true}
        loop={true}
        autoplayDelay={2000}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {carouselData.map((items) => (
          <img width={"100%"} src={items.img} alt="" />
        ))}
      </Carousel>
    </div>
  );
};
export default HomeCarousel;
