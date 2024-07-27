import React from "react";
import { GoChevronLeft } from "react-icons/go";
import { GrSearch } from "react-icons/gr";
import "../index.css";

function SearchCard() {
  return (
    <div className="border-4 border-primary cursor-pointer">
      <div className="flex bg-primary p-2">
        <div>
          <GoChevronLeft
            className="hover-effect rounded-md mr-1"
            style={{ color: "#ffffff", fontSize: "30px" }}
          />
        </div>
        <div>
          <p className="text-white font-PTSans text-lg">Hide</p>
          <div className="flex gap-2 items-center">
            <h4 className="text-white font-Suez uppercase text-2xl">
              Search reway
            </h4>
            <GrSearch
              className="hover-effect rounded-md"
              style={{ color: "#ffffff", fontSize: "24px" }}
            />
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="mb-4">
          <label
            className="block text-darkGrey text-base font-bold mb-2 uppercase"
            htmlFor="rangeInput"
          >
            Brands
          </label>
          <select
            id="multiSelect"
            multiple
            className="border-2 border-gray-300 rounded-md p-2 w-full"
          >
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div className="mb-4">
          <label
            className="block text-darkGrey text-base font-bold mb-2 uppercase"
            htmlFor="rangeInput"
          >
            Colour
          </label>
          <input
            id="colorSelect"
            type="color"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-darkGrey text-base font-bold mb-2 uppercase"
            htmlFor="rangeInput"
          >
            Pricing
          </label>
          <input
            id="rangeInput"
            type="range"
            className="border-2 border-gray-300 rounded-md p-2 w-full"
          />
        </div>

        <div className="flex">
          <button className="font-Suez px-8 py-3 text-lg text-white uppercase hover-effect hover:text-white bg-primary mx-auto">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchCard;
