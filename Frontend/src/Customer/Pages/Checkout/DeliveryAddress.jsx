import React, { useState } from "react";

import { Button, Input, Textarea } from "@material-tailwind/react";
import AddressCard from "./AddressCard";

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
              
                name="firstname"
                value={name.firstname}
                onChange={(e) => handlechange(e)}
                label="First Name"
                required
              />
            </div>
            <div className="sm:w-72  py-2 mx-2 ml-1">
              <Input
                name="lastname"
                value={name.lastname}
                onChange={(e) => handlechange(e)}
                label="Last Name"
                required
              />
            </div>
          </div>
          <div className=" mx-3">
            <Textarea
              name="address"
              value={name.address}
              onChange={(e) => handlechange(e)}
              label="Address"
              required
            />
          </div>
          <div className="flex  flex-col sm:flex-row m-2">
            <div className="sm:w-72 mx-2 py-2  ml-1">
              <Input
                name="city"
                value={name.city}
                onChange={(e) => handlechange(e)}
                label="City"
                required
              />
            </div>
            <div className="sm:w-72  py-2 mx-2 ml-1">
              <Input
                name="zipcode"
                value={name.zipcode}
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
                value={name.state}
                onChange={(e) => handlechange(e)}
                label="State/Region"
                required
              />
            </div>
            <div className="sm:w-72 py-2 mx-2 ml-1">
              <Input
                name="phone"
                value={name.phone}
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
