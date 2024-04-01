import React, { useCallback, useEffect, useMemo, useState } from "react";
import CartItems from "./CartItems";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../Store/Cart/Action";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  // Memoize the selector function using useMemo
  const allCartItems = useMemo(() => cart.cart?.data?.cartItems, [cart]);

  useEffect(() => {
    console.log("Component mounted");
    dispatch(getCart());
  }, [cart.updateCartItems , cart.deleteCartItem]);

  // console.log("Rendering Cart component"); // Add console log to check re-renders

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <header className="text-center">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Your Cart
            </h1>
          </header>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="">
              {allCartItems?.map((items) => {
                return <CartItems key={items._id} items={items} />;
              })}
            </div>
            {/* Checkout */}
            <div className=" flex justify-end  pt-8">
              <div className="w-96 h-60 max-w-lg space-y-4 border-2 p-4 border-gray-500">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between">
                    <dt>Price</dt>
                    <dd>{cart.cart?.data?.totalPrice}</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Delivery Charges</dt>
                    <dd className={`text-green-500`}>Free</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Discount</dt>
                    <dd>{cart.cart?.data?.discount}%</dd>
                  </div>

                  <div className="flex justify-between">
                    <dt>Total Items</dt>
                    <dd>{cart.cart?.data?.totalItems} item</dd>
                  </div>
                  <div className="flex justify-between !text-base font-semibold">
                    <dt>Total</dt>
                    <dd>{cart.cart?.data?.totalPrice}₹</dd>
                  </div>
                </dl>

                <div className="flex justify-end">
                  <span className="inline-flex items-center justify-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-indigo-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="-ms-1 me-1.5 h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
                      />
                    </svg>

                    <p className="whitespace-nowrap text-xs">
                      2 Discounts Applied
                    </p>
                  </span>
                </div>

                <div
                  onClick={() => navigate("/checkout?step=1")}
                  className="flex justify-end "
                >
                  <p
                    href="#"
                    className="block rounded bg-green-300 px-5 py-3 text-sm text-gray-100 transition hover:bg-green-400"
                  >
                    Checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
