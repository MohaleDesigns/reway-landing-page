import React from "react";
import { PiStorefront } from "react-icons/pi";
import { HiOutlineArrowRight } from "react-icons/hi2";
import Boot from "../assets/images/products/small-product-1.png";

interface Props {
  image: string;
  title: string;
  store: string;
  price: string | number;
}

const ProductCard: React.FC<Props> = ({ image, title, store, price }) => {
  return (
    <div className="w-full hover:border-4 hover:border-primary hover:cursor-pointer hover:bg-lightGrey transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
      <img src={image} width={"100%"} alt="boot" />
      <div className="p-2">
        <h4 className="text-black font-Suez uppercase text-xl mb-1">{title}</h4>
        <div className="flex gap-1 items-center mb-1">
          <PiStorefront style={{ color: "#828282", fontSize: "22px" }} />
          <p className=" text-darkGrey font-PTSans text-base font-semibold">
            {store}
          </p>
        </div>
        <div className="flex items-center justify-between mb-1">
          <p className=" text-primary font-Suez text-xl">R{price}</p>
          <button className="flex gap-2 items-center font-PTSans font-medium px-5 py-2 rounded text-sm text-darkGrey hover-effect">
            View <HiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
