import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { carouselData } from "./carouselData";

const items = carouselData.map((items) => 
   <img  width={"100%"}  src={items.img} alt="" />
);

const Carousel = () => <AliceCarousel items={items} disableButtonsControls autoPlay autoPlayInterval={1000}  infinite/>;

export default Carousel;
