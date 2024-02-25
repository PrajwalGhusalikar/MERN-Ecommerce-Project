import React from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import {
  Card,
  CardBody,
  Typography,
  Chip,
  Tooltip,
} from "@material-tailwind/react";
import ModeEditOutlineOutlined from "@mui/icons-material/ModeEditOutlineOutlined";
import OrderStatusStepper from "./OrderStatusStepper";
import CartItems from "../Cart/CartItems";

const OrderStatusPage = () => {
  return (
    <div>
      <div className="sm:h-28">
        {" "}
        <OrderStatusStepper />
      </div>

      <div className="w-screen flex flex-col sm:flex-row justify-evenly mt-16">
        <div className="sm:w-96">
          {/* Later use by props */}
          {/* <AddressCard/>  */}

          {/* later remove */}
          <div className="flex flex-col ">
            <Typography variant="h3" color="blue-gray" className="my-2 ml-8">
              Delivery Address
            </Typography>
            <Card className="m-6 sm:w-96">
              <CardBody>
                <Typography
                  variant="h4"
                  color="blue-gray"
                  className="mb-2 font-light"
                >
                  <div className="flex justify-between">
                    <Chip
                      value={
                        <>
                          Deliver to{" "}
                          <span className="text-yellow-800">Mohan</span>
                        </>
                      }
                      className="px-5 w-auto text-blue-500 rounded-2xl"
                      color="info"
                      variant="outlined"
                      icon={<DeliveryDiningIcon />}
                    />
                    <div className="flex w-20 justify-evenly">
                      {" "}
                      <Tooltip content="Edit Address">
                        <ModeEditOutlineOutlined className="text-green-500 hover:scale-105 ease-out duration-150" />
                      </Tooltip>
                      <Tooltip content="Delete Address">
                        <DeleteForeverOutlinedIcon className="text-red-500 hover:scale-105 ease-out duration-150" />
                      </Tooltip>
                    </div>
                  </div>
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mb-2 ml-8"
                >
                  Mohan Das
                </Typography>
                <Typography variant="h6" className="ml-8">
                  jijamata colony,
                  <p> chandur, maharashtra, 444904</p>
                  <p>Mobile No: 12345</p>
                </Typography>
              </CardBody>
              {/* <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter> */}
            </Card>
          </div>
        </div>
        <div className="w-full flex justify-center ">
          {/* Ordered Cart Items */}

          <div className="p-4 sm:w-[700px]">
            {" "}
            <h2 className="text-3xl pb-3">Your Orders</h2>
            <CartItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderStatusPage;
