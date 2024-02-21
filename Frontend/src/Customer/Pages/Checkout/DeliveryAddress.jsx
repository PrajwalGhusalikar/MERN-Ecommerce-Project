import React from "react";

import { Button, Input, Textarea } from "@material-tailwind/react";

const DeliveryAddress = () => {
  return (
    <div className="w-screen h-screen grid grid-cols-12 space-x-8 ">
      <div className="  col-span-4">
        <div className="flex flex-col"></div>
      </div>
      <div className=" col-span-8">
        <h2 className="text-3xl py-2">Address Information</h2>
        <form className="flex flex-col py-3  ">
          <div class="flex m-2">
            <div className="w-72 mx-2 ml-1">
              <Input label="First Name" />
            </div>
            <div className="w-72 mx-2 ml-1">
              <Input label="Last Name" />
            </div>
          </div>
          <div className="w-[590px] mx-3">
            <Textarea label="Address" />
          </div>
          <div class="flex m-2">
            <div className="w-72 mx-2 ml-1">
              <Input label="City" />
            </div>
            <div className="w-72 mx-2 ml-1">
              <Input label="Zip Code" />
            </div>
          </div>
          <div class="flex m-2">
            <div className="w-72 mx-2 ml-1">
              <Input label="State/Region" />
            </div>
            <div className="w-72 mx-2 ml-1">
              <Input label="Phone" type="number" />
            </div>
          </div>
          <Button className="mt-6 w-[590px] mx-3" fullWidth>
            Set Address
          </Button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddress;
