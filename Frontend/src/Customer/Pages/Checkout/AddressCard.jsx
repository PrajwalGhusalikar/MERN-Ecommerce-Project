import React from 'react'
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

const AddressCard = ({address}) => {
  return (
    <div>
       <div className="flex flex-col">
          <Typography variant="h3" color="blue-gray" className="my-2 ml-8">
            Delivery Address
          </Typography>
          <Card className="m-6 w-96">
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
                        <span className="text-yellow-800">
                          {address.firstname}
                        </span>
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
              <Typography variant="h5" color="blue-gray" className="mb-2 ml-8">
                {address.firstname} {address.lastname}
              </Typography>
              <Typography variant="h6" className="ml-8">
                {address.address},
                <p>
                  {" "}
                  {address.city}, {address.state}, {address.zipcode}
                </p>
                <p>Mobile No: {address.phone}</p>
              </Typography>
            </CardBody>
            {/* <CardFooter className="pt-0">
              <Button>Read More</Button>
            </CardFooter> */}
          </Card>
        </div>
    </div>
  )
}

export default AddressCard
