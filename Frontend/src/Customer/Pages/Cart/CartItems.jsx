import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../Store/Cart/Action";

const CartItems = ({ items }) => {
  const dispatch = useDispatch();

  const handleUpdateCart = (num) => {
    const data = {
      data: { quantity: items.quantity + num },
      cartItemId: items?._id,
    };
    dispatch(updateCartItem(data));
  };

  const handleRemoveCart = (id) => {
    dispatch(removeCartItem(id));
  };

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

            <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
              <div>
                <dt className="inline">Size:</dt>
                <dd className="inline">{items?.size}</dd>
              </div>

              <div>
                <dt className="inline">Color:</dt>
                <dd className="inline">{items?.product?.color}</dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-1 items-center justify-end gap-2">
            <div className="sm:text-xl text-green-400 px-1 pt-1 text-sm">
              {items?.price}₹
            </div>
            <form>
              <label className="text-sm w-20 flex items-center justify-around rounded-xl bg-yellow-200">
                {" "}
                <button disabled={items?.quantity <= 1}>
                  {" "}
                  <i
                    className="fa-solid fa-circle-minus"
                    onClick={() => handleUpdateCart(-1)}
                  ></i>
                </button>
                <p className="w-6 text-center"> {items?.quantity}</p>
                <button>
                  {" "}
                  <i
                    className="fa-solid fa-circle-plus"
                    onClick={() => handleUpdateCart(1)}
                  ></i>
                </button>
              </label>
            </form>

            <button
              className="text-gray-600 transition hover:text-red-600"
              onClick={() => handleRemoveCart(items?._id)}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
