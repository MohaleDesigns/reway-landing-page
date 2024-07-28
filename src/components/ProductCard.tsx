import React from "react";
import { PiStorefront } from "react-icons/pi";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { GoTag } from "react-icons/go";

interface Props {
  image: string;
  title: string;
  store: string;
  price: string | number;
  discount: string;
  inventory: string;
}

const ProductCard: React.FC<Props> = ({
  image,
  title,
  store,
  price,
  inventory,
  discount,
}) => {
  return (
    <div className="w-full hover:border-4 hover:border-primary hover:cursor-pointer hover:bg-lightGrey transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
      <div className="relative">
        {/* tag */}
        {discount && (
          <div className="absolute top-3 right-3 flex gap-1 items-center bg-primary rounded px-2 py-1">
            <GoTag
              className="hover-effect hover:text-primary rounded-md"
              style={{ color: "#ffffff", fontSize: "15px" }}
            />
            <p className="text-white font-PTSans text-xs">{discount}</p>
          </div>
        )}

        <img src={image} width={"100%"} alt="boot" />
        {/* low stock  */}

        {inventory && (
          <div className="absolute bottom-3 left-3 bg-black/50 rounded px-2 py-1">
            <p className="text-white font-PTSans text-base uppercase italic font-bold">
              {inventory}
            </p>
          </div>
        )}
      </div>

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
