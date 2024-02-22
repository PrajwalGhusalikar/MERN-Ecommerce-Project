import React, { useState } from "react";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import {
  Button,
  Input,
  Textarea,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Chip,
  Tooltip,
} from "@material-tailwind/react";
import ModeEditOutlineOutlined from "@mui/icons-material/ModeEditOutlineOutlined";

const DeliveryAddress = () => {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
    address: "",
    city: "",
    zipcode: "",
    state: "",
    phone: "",
  });

  const [address, setAddress] = useState({
    firstname: "Demo",
    lastname: "Name",
    address: "Demo",
    city: "City",
    zipcode: "444444",
    state: "State",
    phone: "123456",
  });

  const handlechange = (e) => {
    e.preventDefault();
    setName({ ...name, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAddress(name);
  };

  return (
    <div className="w-screen  grid grid-cols-12 ">
      <div className="  col-span-4">
        <div className="flex flex-col">
          <Card className="m-6 w-96">
            <CardBody>
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 font-light"
              >
                <div className="flex justify-between">
                  <Chip
                    value={`Deliver to ${address.firstname}`}
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
      <div className=" col-span-8">
        <h2 className="text-2xl ">Delivery Address Information</h2>
        <form className="flex flex-col py-3  ">
          <div className="flex m-2 my-4">
            <div className="w-72 mx-2 ml-1">
              <Input
                name="firstname"
                value={name.firstname}
                onChange={(e) => handlechange(e)}
                label="First Name"
                required
              />
            </div>
            <div className="w-72 mx-2 ml-1">
              <Input
                name="lastname"
                value={name.lastname}
                onChange={(e) => handlechange(e)}
                label="Last Name"
              />
            </div>
          </div>
          <div className="w-[590px] mx-3">
            <Textarea
              name="address"
              value={name.address}
              onChange={(e) => handlechange(e)}
              label="Address"
            />
          </div>
          <div className="flex m-2">
            <div className="w-72 mx-2 ml-1">
              <Input
                name="city"
                value={name.city}
                onChange={(e) => handlechange(e)}
                label="City"
              />
            </div>
            <div className="w-72 mx-2 ml-1">
              <Input
                name="zipcode"
                value={name.zipcode}
                onChange={(e) => handlechange(e)}
                label="Zip Code"
              />
            </div>
          </div>
          <div className="flex m-2">
            <div className="w-72 mx-2 ml-1">
              <Input
                name="state"
                value={name.state}
                onChange={(e) => handlechange(e)}
                label="State/Region"
              />
            </div>
            <div className="w-72 mx-2 ml-1">
              <Input
                name="phone"
                value={name.phone}
                onChange={(e) => handlechange(e)}
                label="Phone"
                type="number"
              />
            </div>
          </div>
          <Button
            onClick={handleSubmit}
            className="mt-6 w-[590px] mx-3"
            type="button"
            fullWidth
          >
            Set Address
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddress;
