import React from "react";
import { menskurtas } from "../../Components/HomeSectionCarousel/menskurtas";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const ProductCard = ({ brand, image, title, price, discountedPrice }) => {
  return (
    <div>
      <Card className="w-64  h-[400px] m-3 hover:scale-105 ease-out duration-150 shadow-lg bg-blue-gray-100">
        <CardHeader shadow={false} floated={false} className="h-96">
          <img
            src={image}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {brand}
            </Typography>
            <div className="flex">
              <Typography color="green" className="font-medium mx-2">
                {price} ₹
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium text-red-500 line-through opacity-60"
              >
                {discountedPrice}₹
              </Typography>
            </div>
          </div>
          <Typography
            variant="small"
            color="gray"
            className="font-normal opacity-75"
          >
            {title}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:bg-green-300 hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductCard;
