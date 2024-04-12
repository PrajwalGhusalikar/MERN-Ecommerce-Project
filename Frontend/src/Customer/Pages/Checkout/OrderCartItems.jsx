import React, { useState } from "react";

const OrderCartItems = ({ items }) => {
  return (
    <div className="m-2">
      <ul className="space-y-4">
        <li className="flex items-center gap-3">
          <img
            src={items?.product?.imageUrl}
            alt=""
            className="size-20  rounded object-cover"
          />

          <div className="">
            <h3 className="text-xs sm:text-sm text-gray-900 w-48">
              {items?.product?.title}
            </h3>

            <dl className="mt-0.5 space-y-px text-[15px] text-gray-600">
              <div>
                <dt className="inline">Size:</dt>
                <dd className="inline">{items?.size}</dd>
              </div>

              {/* <div>
                <dt className="inline">Color:</dt>
                <dd className="inline">{items?.product?.color}</dd>
              </div> */}
            </dl>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2">
            <div className="sm:text-sm  px-1 pt-1 text-sm">
              Quantity: {items?.quantity}
            </div>
            <div className="sm:text-xl text-green-400 px-1 pt-1 text-sm">
              {items?.price}₹
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default OrderCartItems;
