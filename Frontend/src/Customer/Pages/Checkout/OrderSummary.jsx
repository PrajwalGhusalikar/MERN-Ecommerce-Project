import React from "react";
import CartItems from "../Cart/CartItems";

const OrderSummary = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-2 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <header className="text-start">
            <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
              Order Summary
            </h1>
          </header>

          <div className="mt-8 grid grid-cols-2 gap-8">
            <CartItems />

            {/* Checkout */}
            <div className=" flex justify-end  pt-8">
              <div className="w-96 h-72 max-w-lg space-y-4 border-2 p-4  border-gray-500">
                <dl className="space-y-0.5 text-sm text-gray-700">
                  <div className="flex justify-between text-lg">
                    <dt>Total Items</dt>
                    <dd className="font-semibold">5</dd>
                  </div>
                  <div className="flex justify-between text-lg">
                    <dt>Price</dt>
                    <dd className="font-semibold">250₹</dd>
                  </div>

                  <div className="flex justify-between text-lg">
                    <dt>Delivery Charges</dt>
                    <dd className={`text-green-500 font-semibold `}>Free</dd>
                  </div>

                  <div className="flex justify-between text-lg">
                    <dt>Discount</dt>
                    <dd className="text-lg font-semibold">-20%</dd>
                  </div>

                  <div className="flex justify-between  font-semibold text-lg">
                    <dt>Total</dt>
                    <dd className="text-lg font-semibold">200₹</dd>
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

                <div className="flex justify-end">
                  <a
                    href="#"
                    className="block rounded bg-green-300 px-5 py-3 text-sm text-gray-100 transition hover:bg-green-400"
                  >
                    Payment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSummary;
