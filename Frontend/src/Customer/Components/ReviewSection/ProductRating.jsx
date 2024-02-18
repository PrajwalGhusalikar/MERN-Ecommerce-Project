import React, { useState } from "react";
import { Progress, Rating, Typography } from "@material-tailwind/react";
const ProductRating = () => {
  const [rated, setRated] = useState(4);
  return (
    <div>
      <div className="w-96">
        <h1 className="text-2xl my-2">Product Rating</h1>
      </div>

      <div className="flex items-center gap-2 font-bold text-blue-gray-500">
        {rated}.5
        <Rating value={rated} readonly />
        <Typography
          color="blue-gray"
          className="font-medium text-blue-gray-500"
        >
          Based on 134 Reviews
        </Typography>
      </div>
      <div className=" my-4">
        <Progress
          value={75}
          size="md"
          label="Excellent"
          color="green"
          className="my-3"
        />
        <Progress
          value={60}
          size="md"
          label="Good"
          color="yellow"
          className="my-3"
        />
        <Progress
          value={50}
          size="md"
          label="Average"
          color="amber"
          className="my-3"
        />
        <Progress
          value={30}
          size="md"
          label="Bad"
          color="red"
          className="my-3"
        />
      </div>
    </div>
  );
};

export default ProductRating;
