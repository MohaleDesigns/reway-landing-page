import { useState } from "react";
import logo from "../assets/logo.svg";
import "../index.css";
import { SlPresent } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoTag, GoStar } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { CiSquareRemove } from "react-icons/ci";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-5 relative">
        <img src={logo} alt="logo" className="h-10" />

        <ul className="hidden lg:flex uppercase font-Suez gap-5 items-center text-sm">
          <li className="hover-effect hover:text-primary p-2 rounded-md">
            Apparels
          </li>
          <li className="hover-effect hover:text-primary p-2 rounded-md">
            Shoes
          </li>
          <li className="hover-effect hover:text-primary p-2 rounded-md">
            Accessories
          </li>
          <li className="hover-effect hover:text-primary p-2 rounded-md">
            Gift
          </li>
        </ul>

        <div className="hidden lg:flex gap-5 items-center">
          <GoStar
            className="hover-effect hover:text-primary rounded-md"
            style={{ color: "#828282", fontSize: "20px" }}
          />
          <SlPresent
            className="hover-effect hover:text-primary rounded-md"
            style={{ color: "#828282", fontSize: "20px" }}
          />
          <IoIosHeartEmpty
            className="hover-effect hover:text-primary rounded-md"
            style={{ color: "#828282", fontSize: "20px" }}
          />
          <GoTag
            className="hover-effect hover:text-primary rounded-md"
            style={{ color: "#828282", fontSize: "20px" }}
          />
        </div>

        <div className="hidden lg:flex gap-1 items-center">
          <button className="font-Suez px-5 py-2 rounded text-sm text-primary uppercase hover-effect">
            Sign Up
          </button>
          <button className="font-Suez border-[3px] px-5 py-2 border-primary rounded text-sm text-primary uppercase hover-effect">
            Login
          </button>
        </div>

        <div className="lg:hidden flex items-center">
          <GiHamburgerMenu
            className="text-primary"
            style={{ fontSize: "24px" }}
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="flex flex-col items-center justify-center lg:hidden absolute top-0 left-0 w-full h-full bg-white shadow-md p-5 z-50 transition-all delay-150 duration-100 ease-in-out">
          <CiSquareRemove
            className="absolute top-4 right-3 hover-effect hover:text-primary rounded-md float-right"
            style={{ color: "#828282", fontSize: "40px" }}
            onClick={toggleMobileMenu}
          />

          <div className="flex flex-col items-center justify-center">
            <ul className="uppercase font-Suez flex items-center flex-col gap-10 text-sm mt-10">
              <li className="hover-effect hover:text-primary p-2 rounded-md">
                Apparels
              </li>
              <li className="hover-effect hover:text-primary p-2 rounded-md">
                Shoes
              </li>
              <li className="hover-effect hover:text-primary p-2 rounded-md">
                Accessories
              </li>
              <li className="hover-effect hover:text-primary p-2 rounded-md">
                Gift
              </li>
            </ul>

            <div className="flex flex-col gap-10 mt-20">
              <div className="flex gap-5 justify-center">
                <GoStar
                  className="hover-effect hover:text-primary rounded-md"
                  style={{ color: "#828282", fontSize: "20px" }}
                />
                <SlPresent
                  className="hover-effect hover:text-primary rounded-md"
                  style={{ color: "#828282", fontSize: "20px" }}
                />
                <IoIosHeartEmpty
                  className="hover-effect hover:text-primary rounded-md"
                  style={{ color: "#828282", fontSize: "20px" }}
                />
                <GoTag
                  className="hover-effect hover:text-primary rounded-md"
                  style={{ color: "#828282", fontSize: "20px" }}
                />
              </div>

              <div className="flex flex-col gap-1 items-center">
                <button className="font-Suez px-5 py-2 rounded text-sm text-primary uppercase hover-effect">
                  Sign Up
                </button>
                <button className="font-Suez border-[3px] px-5 py-2 border-primary rounded text-sm text-primary uppercase hover-effect">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
