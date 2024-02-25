import React from "react";
const HomeCarouselCard = ({ image, brand, title }) => {
  return (
    <div>
      <div className=" sm:w-52 h-76  hover:scale-105 ease-out cursor-pointer hover:border hover:border-slate-300 shadow-slate-900 shadow-lg duration-200 rounded sm:h-[350px] flex flex-col items-center bg-green-100 p-2 m-3">
        <div className="img">
          <img className="h-48 sm:60 w-48" src={image} alt="" />
        </div>
        <div className="cloth-text">
          <h2 className="text-xl font-semibold py-1">{brand}</h2>
          <h2 className="text-base text-wrap">{title.slice(0, 35) + "..."}</h2>
        </div>
      </div>
    </div>
  );
};

export default HomeCarouselCard;
