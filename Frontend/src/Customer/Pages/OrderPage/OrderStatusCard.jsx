import React, { useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { useNavigate } from "react-router-dom";

const OrderStatusCard = () => {
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
  ]);

  // const handleChange = (e, index) => {
  //   const newItems = [...items]; // Create a copy of the items array
  //   newItems[index].quantity = parseInt(e.target.value); // Update quantity of the corresponding item
  //   setItems(newItems); // Update state with the new items array
  // };

  const navigate = useNavigate();

  return (
    <div>
      <ul onClick={() => navigate(`${5}?step=${3}`)} className="space-y-5">
        {items.map((items, index) => (
          <li className="flex flex-col sm:flex-row items-center bg-brown-100 p-2 gap-2 sm:gap-4">
            <div className="flex sm:w-[400px] items-center gap-2">
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

              <div className="flex  items-center justify-end gap-2">
                <div className="">
                  <div className="text-sm text-gray-600 px-3 ">
                    qty:{items.quantity}
                  </div>
                  <div className="text-xl text-slate-400 px-3 ">
                    {items.price}₹
                  </div>
                </div>
              </div>
            </div>{" "}
            <div className="flex flex-col ml-10">
              <h2 className="text-base font-bold">
                {" "}
                <span className="text-green-500">
                  <AccessTimeIcon />{" "}
                </span>
                Expected Delivery on march 3
              </h2>
              <h3 className="text-sm pl-8 text-gray-600">
                Your order will deliver soon
              </h3>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderStatusCard;
