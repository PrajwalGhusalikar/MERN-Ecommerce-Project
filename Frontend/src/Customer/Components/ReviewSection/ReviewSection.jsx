import React from "react";
import { ReviewCard } from "./ReviewCard";
import ProductRating from "./ProductRating";

const ReviewSection = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-evenly w-screen">
        <div className="h-96 overflow-y-scroll scroll-px-0 -scroll-my-6">
          <ReviewCard />
        </div>
        <div className="w-full flex justify-center">
          <ProductRating />
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
