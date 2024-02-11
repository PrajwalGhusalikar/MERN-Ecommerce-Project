import React from "react";
import { HomeSectionCarouselData } from "./homeCardCarouselData";
const HomeCarouselCard = () => {
  return (
    <div>
      <div className="w-48 h-76 flex flex-col items-center bg-slate-400">
        <div className="img">
          <img

            src="https://images.pexels.com/photos/10558196/pexels-photo-10558196.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            className="h-60 w-48"
          />
        </div>
        <div className="cloth-text">
          <h2 className="text-xl">Cloths</h2>
          <h2 className="text-base text-wrap">The best discount on Cloths</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeCarouselCard;
