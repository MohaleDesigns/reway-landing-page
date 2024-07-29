import { useState } from "react";
import Select from "react-select";
import { Range, getTrackBackground } from "react-range";
import { GoChevronLeft } from "react-icons/go";
import { GrSearch } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import "../index.css";

interface Props {
  toggleLeftSection: () => void;
}

function SearchCard({ toggleLeftSection }: Props) {
  const [values, setValues] = useState([20, 4000]);

  const options = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "yellow", label: "Yellow" },
    { value: "purple", label: "Purple" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "brown", label: "Brown" },
    { value: "gray", label: "Gray" },
    { value: "black", label: "Black" },
  ];

  return (
    <div className="border-4 border-primary cursor-pointer">
      <div className="flex bg-primary p-2">
        <div onClick={toggleLeftSection}>
          <GoChevronLeft
            className="hover-effect rounded-md mr-1"
            style={{ color: "#ffffff", fontSize: "30px" }}
            onClick={toggleLeftSection}
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
        <div className="relative mb-4">
          <label
            className="block text-darkGrey/50 text-base font-bold mb-2 uppercase"
            htmlFor="color-select"
          >
            Brands
          </label>
          <div className="relative">
            <Select
              id="color-select"
              options={options}
              isMulti
              className="basic-single"
              classNamePrefix="select"
              placeholder="SELECT BRANDS"
              styles={{
                control: (provided) => ({
                  ...provided,
                  borderColor: "rgba(130,130,130, 0.5)",
                  borderWidth: "2px",
                  borderRadius: "0.375rem",
                  padding: "2.5px 0",
                }),
                multiValue: (provided) => ({
                  ...provided,
                  backgroundColor: "#e5e7eb",
                  borderRadius: "0.25rem",
                }),
                multiValueLabel: (provided) => ({
                  ...provided,
                  color: "#374151",
                  fontWeight: "bold",
                }),
                multiValueRemove: (provided) => ({
                  ...provided,
                  color: "#6b7280",
                  ":hover": {
                    backgroundColor: "#f3f4f6",
                    color: "#111827",
                  },
                }),
              }}
            />
            {/* <IoMdArrowDropdown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-darkGrey/50 text-2xl pointer-events-none" /> */}
          </div>
        </div>

        <div className="relative mb-4">
          <label
            className="block text-darkGrey/50 text-base font-bold mb-2 uppercase"
            htmlFor="quantitySelect"
          >
            Quantity
          </label>
          <div className="flex items-center relative">
            <select
              id="color"
              className="border-2 border-darkGrey/50 rounded-md p-2 w-full text-darkGrey/50 font-bold appearance-none"
            >
              <option value="">SELECT COLOR</option>
              <option value="red">Red</option>
              <option value="green">Green</option>
              <option value="blue">Blue</option>
              <option value="yellow">Yellow</option>
              <option value="purple">Purple</option>
              <option value="orange">Orange</option>
              <option value="pink">Pink</option>
              <option value="brown">Brown</option>
              <option value="gray">Gray</option>
              <option value="black">Black</option>
            </select>
            <IoMdArrowDropdown className="absolute right-2 text-darkGrey/50 pointer-events-none text-2xl" />
          </div>
        </div>

        <div className="relative mb-8">
          <label
            className="block text-darkGrey/50 text-base font-bold mb-3 uppercase"
            htmlFor="priceRange"
          >
            Pricing
          </label>
          <div className="flex flex-col items-center">
            <Range
              step={1}
              min={0}
              max={5000}
              values={values}
              onChange={(values) => setValues(values)}
              renderTrack={({ props, children }) => (
                <div
                  {...props}
                  className="h-2 w-full bg-gray-200 rounded-md"
                  style={{
                    background: getTrackBackground({
                      values,
                      colors: ["#ccc", "#4a90e2", "#ccc"],
                      min: 0,
                      max: 100,
                    }),
                  }}
                >
                  {children}
                </div>
              )}
              renderThumb={({ props, isDragged }) => (
                <div
                  {...props}
                  className={`h-6 w-6 rounded-full border border-gray-300 bg-white ${
                    isDragged ? "shadow-lg" : ""
                  }`}
                />
              )}
            />
            <div className="mt-2 text-darkGrey/50 font-bold">
              R{values[0]} - R{values[1]}
            </div>
          </div>
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
