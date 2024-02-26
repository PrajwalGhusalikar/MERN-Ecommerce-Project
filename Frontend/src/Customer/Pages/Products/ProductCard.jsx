import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ brand, image, title, price, discountedPrice }) => {
  const navigate = useNavigate();
  return (
    <div>
      <Card
        onClick={() => navigate(`/product/${brand}`)}
        className="sm:w-64 w-40 hover:cursor-pointer h-[300px]  sm:h-[400px] m-1 sm:m-3 hover:scale-105 ease-out duration-150 shadow-lg bg-blue-gray-100"
      >
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={image}
           alt=""
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="p-2 sm:p-6">
          <div className="mb-2 flex items-center justify-between">
            <Typography
              color="blue-gray"
              className="font-medium sm:text-lg text-sm"
            >
              {brand}
            </Typography>
            <div className="flex">
              <Typography
                color="green"
                className="font-medium mx-2 sm:text-base text-xs"
              >
                {price} ₹
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium text-red-500 line-through opacity-60 sm:text-base text-xs"
              >
                {discountedPrice}₹
              </Typography>
            </div>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75 sm:text-base text-xs"
          >
            {title}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0 pb-2 sm:pb-4">
          <Button
            ripple={true}
            fullWidth={true}
            className="bg-blue-gray-900/10  sm:text-lg text-blue-gray-900 shadow-none hover:bg-green-300 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100 hidden sm:inline-block  "
          >
            Add to Cart
          </Button>
          <button className="p-1.5 w-full sm:hidden rounded-2xl bg-blue-gray-900/10">
            Add to Cart
          </button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
