import React, { useState } from "react";

const CartItems = () => {
  const [items, setItems] = useState([
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70",
      brand: "Majestic Man",
      title: "Men Printed Pure Cotton Straight Kurta",
      color: "Green",
      discountedPrice: 499,
      price: 1499,
      discountPersent: 66,
      size: "S",
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/l/f/r/xl-k-spl668-yellow-sg-leman-original-imagznqcrahgq9rf.jpeg?q=70",
      brand: "SG LEMAN",
      title: "Men Embroidered Jacquard Straight Kurta",
      color: "Yellow",
      discountedPrice: 799,
      price: 2499,
      discountPersent: 68,
      size: "S",
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/g/6/k/m-sksh-dt1105-pcbl-fubar-original-imafux247zhqym2z-bb.jpeg?q=70",
      brand: "FUBAR",
      title: "Men Printed Cotton Blend Straight Kurta",
      color: "Blue",
      discountedPrice: 399,
      price: 1499,
      discountPersent: 73,
      size: "S",
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/i/v/x/xxl-br-ad-kt-105-adwyn-peter-original-imagj4zyd2q7t6cg.jpeg?q=70",
      brand: "ALY JOHN",
      title: "Men Solid Pure Cotton Straight Kurta",
      color: "White",
      discountedPrice: 474,
      price: 1999,
      discountPersent: 76,
      size: "S",
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/j/a/r/l-poch521835-peter-england-original-imag7jg47g7cxhg3-bb.jpeg?q=70",
      brand: "PETER ENGLAND",
      title: "Men Woven Design Pure Cotton Straight Kurta",
      color: "Grey",
      discountedPrice: 524,
      price: 1049,
      discountPersent: 50,
      size: "S",
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/y/c/x/xl-kast107hp-majestic-man-original-imafw49u5uty4agx-bb.jpeg?q=70",
      brand: "Majestic Man",
      title: "Men Solid Pure Cotton Straight Kurta",
      color: "Pink",
      discountedPrice: 499,
      price: 1499,
      discountPersent: 66,
      size: "S",
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/kpodocw0/t-shirt/x/o/4/xl-wr-64-wrodss-original-imag3upwgq9n9fbv.jpeg?q=70",
      brand: "WRODSS",
      title: "Men Solid Cotton Blend Straight Kurta",
      color: "Black",
      discountedPrice: 277,
      price: 999,
      discountPersent: 72,
      size: "S",
      quantity: 100,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/l4zxn680/kurta/i/g/u/s-mtml0039-341-manthan-original-imagfrz3gwgdtczm.jpeg?q=70",
      brand: "Manthan",
      title: "Men Printed Cotton Blend Straight Kurta",
      color: "Blue",
      discountedPrice: 765,
      price: 1049,
      discountPersent: 27,
      size: "S",
      quantity: 85,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
    {
      image:
        "https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/m/e/e/s-kurta-rahul-look-original-imaga2g6qmhbywdf-bb.jpeg?q=70",
      brand: "RAHUL LOOK",
      title: "Men Solid Pure Cotton Straight Kurta",
      color: "Green",
      discountedPrice: 499,
      price: 1599,
      discountPersent: 68,
      size: "S",
      quantity: 99,
      topLavelCategory: "Men",
      secondLavelCategory: "Clothing",
      thirdLavelCategory: "mens_kurta",
      description:
        "A traditional garment embodying elegance and grace. Crafted from fine fabrics, it features intricate embroidery and a relaxed fit, providing comfort and style.",
    },
  ]);

  const handleChange = (e, index) => {
    const newItems = [...items]; // Create a copy of the items array
    newItems[index].quantity = parseInt(e.target.value); // Update quantity of the corresponding item
    setItems(newItems); // Update state with the new items array
  };

  return (
    <div>
      <ul className="space-y-4">
        {items.map((items, index) => (
          <li className="flex items-center gap-4">
            <img
              src={items.image}
              alt=""
              className="size-16 rounded object-cover"
            />

            <div>
              <h3 className="text-sm text-gray-900">{items.title}</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">Size:</dt>
                  <dd className="inline">{items.size}</dd>
                </div>

                <div>
                  <dt className="inline">Color:</dt>
                  <dd className="inline">{items.color}</dd>
                </div>
              </dl>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
              <div className="text-xl text-gray-500">{items.price}$</div>
              <form>
                <label htmlFor="Line1Qty" className="sr-only">
                  {" "}
                  Quantity{" "}
                </label>

                <input
                  type="number"
                  min="1"
                  value={items.quantity}
                  onChange={(e) => handleChange(e, index)}
                  id="Line1Qty"
                  className="h-8 w-12 rounded border-gray-200 bg-gray-50 p-0 text-center text-xs text-gray-600 [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                />
              </form>

              <button className="text-gray-600 transition hover:text-red-600">
                <span className="sr-only">Remove item</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CartItems;
