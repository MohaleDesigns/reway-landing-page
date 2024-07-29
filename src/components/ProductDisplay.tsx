import { PiStorefront } from "react-icons/pi";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { GoTag } from "react-icons/go";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import { IoMdArrowDropdown } from "react-icons/io";
import smallImageTwo from "../assets/images/products/big-product-2.png";
import smallImageThree from "../assets/images/products/big-product-3.png";
import smallImageFour from "../assets/images/products/big-product-4.png";
import smallImageFive from "../assets/images/products/big-product-5.png";
import smallImageSix from "../assets/images/products/big-product-6.png";

function ProductDisplay() {
  return (
    <div className="mb-2">
      {/* links  */}
      <div className="flex items-center gap-1 mb-4">
        <p className="font-PTSans text-primary hover:underline hover:cursor-pointer">
          Home
        </p>
        <HiOutlineChevronRight />
        <p className="font-PTSans text-primary hover:underline hover:cursor-pointer">
          Boots
        </p>
        <HiOutlineChevronRight />
        <p className="font-PTSans text-darkGrey">Dylan Hiker Boots</p>
      </div>

      {/* two columns */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-2">
        {/* photo gallery */}
        <div className="mb-5 lg:mb-0">
          {/* big photo */}
          <div className="h-[600px] relative">
            {/* tag  */}
            <div className="absolute top-3 right-3 flex gap-1 items-center bg-primary rounded px-2 py-1">
              <GoTag
                className="hover-effect hover:text-primary rounded-md"
                style={{ color: "#ffffff", fontSize: "15px" }}
              />
              <p className="text-white font-PTSans text-xs">-40% Off</p>
            </div>
            {/* arrow  */}
            <div className="absolute top-1/2 left-0 right-0 w-full flex items-center justify-between">
              <HiOutlineChevronLeft
                className="arrows"
                style={{ color: "#828282", fontSize: "40px" }}
              />
              <HiOutlineChevronRight
                className="arrows"
                style={{ color: "#828282", fontSize: "40px" }}
              />
            </div>
            <img
              src={smallImageTwo}
              className="object-cover w-full h-[600px]"
              alt="boot one"
            />
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 mx-auto flex gap-1 rounded-full p-1 bg-black/10 w-16">
              <div className="h-2 w-2 rounded-full bg-white/30"></div>
              <div className="h-2 w-2 rounded-full bg-white/30"></div>
              <div className="h-2 w-2 rounded-full bg-white"></div>
              <div className="h-2 w-2 rounded-full bg-white/30"></div>
              <div className="h-2 w-2 rounded-full bg-white/30"></div>
            </div>
          </div>
          {/* small photos */}
          <div className="grid grid-cols-4 gap-[10px] mt-2">
            <div className="image-hover">
              <div className="overlay"></div>
              <img
                src={smallImageThree}
                className="object-cover w-full h-[100px]"
                alt="boot three"
              />
            </div>
            <div className="image-hover">
              <div className="overlay"></div>
              <img
                src={smallImageSix}
                className="object-cover w-full h-[100px]"
                alt="boot six"
              />
            </div>
            <div className="image-hover">
              <div className="overlay"></div>
              <img
                src={smallImageTwo}
                className="object-cover w-full h-[100px]"
                alt="boot two"
              />
            </div>
            <div className="image-hover">
              <div className="overlay"></div>
              <img
                src={smallImageFive}
                className="object-cover w-full h-[100px]"
                alt="boot five"
              />
            </div>
            <div className="image-hover">
              <div className="overlay"></div>
              <img
                src={smallImageFour}
                className="object-cover w-full h-[100px]"
                alt="boot four"
              />
            </div>
          </div>
        </div>
        {/* product details & filter/add cart */}
        <div className="lg:pl-10">
          {/* product details */}
          <div className="border-4 border-primary cursor-pointer p-4 mb-5">
            <h4 className="text-black font-Suez uppercase text-xl">
              Dylan Hiker Boot
            </h4>
            <div className="flex gap-1 items-center my-1">
              <PiStorefront style={{ color: "#828282", fontSize: "18px" }} />
              <p className=" text-darkGrey font-PTSans text-sm font-medium">
                SUPERBALIST
              </p>
            </div>

            <div>
              <div className="border-b border-darkGrey p-4">
                <table>
                  <tr>
                    <td className="text-darkGrey font-PTSans text-lg pr-5">
                      Fabication
                    </td>
                    <td className="text-black font-Suez text-lg">
                      Faux Leather
                    </td>
                  </tr>
                  <tr>
                    <td className="text-darkGrey font-PTSans text-lg pr-5">
                      Colour
                    </td>
                    <td className="text-black font-Suez text-lg">Brown</td>
                  </tr>
                  <tr>
                    <td className="text-darkGrey font-PTSans text-lg pr-5">
                      Brand
                    </td>
                    <td className="text-black font-Suez text-lg">
                      Superbalist
                    </td>
                  </tr>
                </table>
              </div>
              <div className="p-4">
                <p className="mb-2 uppercase text-darkGrey font-PTSans text-sm font-medium">
                  Product Details
                </p>
                <ul className="list-disc pl-5">
                  <li>Hiking boot</li>
                  <li>Speed Laces</li>
                  <li>Lace-up design</li>
                  <li>Rubber sole</li>
                </ul>
              </div>
            </div>

            <div className="relative flex gap-3 items-center my-1 justify-end">
              <div className="flex gap-1 items-center bg-primary rounded px-2 py-1">
                <GoTag
                  className="hover-effect hover:text-primary rounded-md"
                  style={{ color: "#ffffff", fontSize: "15px" }}
                />
                <p className="text-white font-PTSans text-xs">-40% Off</p>
              </div>

              <p className="absolute line-through -top-3 right-1 text-darkGrey font-Suez text-base">
                599
              </p>
              <p className=" text-black font-Suez text-2xl">R359</p>
            </div>
          </div>
          {/* filter/add cart */}
          <div className="p-8 bg-lightGrey">
            {/* Size */}
            <div className="relative mb-4">
              <label
                className="block text-darkGrey/50 text-base font-bold mb-2 uppercase"
                htmlFor="quantitySelect"
              >
                Size
              </label>
              <div className="flex items-center relative">
                <select
                  id="size"
                  className="border-2 border-darkGrey/50 rounded-md p-2 w-full font-bold text-darkGrey/50 appearance-none"
                >
                  <option value="">SELECT SIZE</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <IoMdArrowDropdown className="absolute right-2 text-darkGrey/50  pointer-events-none text-2xl" />
              </div>
            </div>

            {/* Quantity */}
            <div className="relative mb-4">
              <label
                className="block text-darkGrey/50 text-base font-bold mb-2 uppercase"
                htmlFor="quantitySelect"
              >
                Quantity
              </label>
              <div className="flex items-center relative">
                <select
                  id="quantitySelect"
                  className="border-2 border-darkGrey/50 rounded-md p-2 w-full font-bold text-darkGrey/50 appearance-none"
                >
                  <option value="">SELECT QUANTITY</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <IoMdArrowDropdown className="absolute right-2 text-darkGrey/50 pointer-events-none text-2xl" />
              </div>
            </div>

            <div className="flex">
              <button className="font-Suez flex items-center justify-center w-full gap-2 px-8 py-3 text-[25px] md:text-[30px] text-white uppercase hover-effect hover:text-white bg-primary mx-auto">
                <HiOutlineShoppingCart
                  style={{ color: "#ffffff", fontSize: "30px" }}
                />{" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
