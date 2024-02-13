import React from "react";
const HomeCarouselCard = ({image}) => {
  return (
    <div>
      <div className="w-48 h-76 flex flex-col items-center bg-slate-400">
        <div className="img">
          {/* {HomeCardCarouselData.map((item) => {
            <img key={item.key} src={item.img} alt="" className="h-60 w-48" />;
            {
              console.log("key--", item.key);
            }
          })} */}
          <img className="h-60 w-48" src={image} alt="" />
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
