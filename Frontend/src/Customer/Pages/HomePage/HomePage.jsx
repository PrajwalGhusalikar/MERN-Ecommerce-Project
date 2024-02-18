import React from "react";
import HomeCarousel from "../../Components/HomeCarousel/HomeCarousel";
import HomeSectionCarousel from "../../Components/HomeSectionCarousel/HomeSectionCarousel";
import {menskurtas} from "../../Components/HomeSectionCarousel/menskurtas"
import {womenskurtas} from "../../Components/HomeSectionCarousel/womenskurtas"
import {saree} from "../../Components/HomeSectionCarousel/saree"
import { Footer } from "../../Components/Footer/Footer";
document.body.style.backgroundColor = "#E6E6FA";
const HomePage = () => {
  return (
    <>
      <div>
        <HomeCarousel />
      </div>
      <div className="mt-20">
        <HomeSectionCarousel data={menskurtas} heading="Mens Kurtas" />
        <HomeSectionCarousel data={womenskurtas} heading="Womens Kurtas"  />
        <HomeSectionCarousel data={saree} heading="Ladies Saree" />
      </div>
      
    </>
  );
};

export default HomePage;
