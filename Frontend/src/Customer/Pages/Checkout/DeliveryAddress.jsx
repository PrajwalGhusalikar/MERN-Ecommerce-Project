import React, { useState } from "react";

import { Button, Input, Textarea } from "@material-tailwind/react";
import AddressCard from "./AddressCard";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createOrder } from "../../../Store/Orders/Action";

const DeliveryAddress = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [address, setAddress] = useState({});

  const handlechange = (e) => {
    e.preventDefault();
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderData = { address, navigate };
    dispatch(createOrder(orderData));
  };

  return (
    <div className="w-screen grid sm:grid-cols-2 grid-cols-1 ">
      <div className="address-card flex justify-center ">
        <AddressCard address={address} />
      </div>
      <div className="Address-info ">
        <h2 className="text-2xl px-3 ">Delivery Address Information</h2>
        <form onSubmit={handleSubmit} className="flex flex-col p-3  ">
          <div className="flex flex-col sm:flex-row justify-between m-2 my-4">
            <div className="sm:w-72  py-2   mx-2 ml-1">
              <Input
                name="firstName"
                value={address.firstName}
                onChange={(e) => handlechange(e)}
                label="First Name"
                required
              />
            </div>
            <div className="sm:w-72  py-2 mx-2 ml-1">
              <Input
                name="lastName"
                value={address.lastName}
                onChange={(e) => handlechange(e)}
                label="Last Name"
                required
              />
            </div>
          </div>
          <div className=" mx-3">
            <Textarea
              name="address"
              value={address.address}
              onChange={(e) => handlechange(e)}
              label="Address"
              required
            />
          </div>
          <div className="flex  flex-col sm:flex-row m-2">
            <div className="sm:w-72 mx-2 py-2  ml-1">
              <Input
                name="city"
                value={address.city}
                onChange={(e) => handlechange(e)}
                label="City"
                required
              />
            </div>
            <div className="sm:w-72  py-2 mx-2 ml-1">
              <Input
                name="zipCode"
                value={address.zipCode}
                onChange={(e) => handlechange(e)}
                label="Zip Code"
                required
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row m-2">
            <div className="sm:w-72 py-2  mx-2 ml-1">
              <Input
                name="state"
                value={address.state}
                onChange={(e) => handlechange(e)}
                label="State/Region"
                required
              />
            </div>
            <div className="sm:w-72 py-2 mx-2 ml-1">
              <Input
                name="mobile"
                value={address.mobile}
                onChange={(e) => handlechange(e)}
                label="Phone"
                type="number"
                required
              />
            </div>
          </div>
          <Button className="mt-6  w-fit  mx-3" type="submit" fullWidth>
            Set Address
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddress;
