import React from "react";
import logo from "../assets/logo.svg";
import "../index.css";
import { SlPresent } from "react-icons/sl";
import { IoIosHeartEmpty } from "react-icons/io";
import { GoTag, GoStar } from "react-icons/go";

function Header() {
  return (
    <header>
      <div className="container mx-auto flex align-middle justify-between rounded-md p-5">
        <img src={logo} alt="logo" />

        <ul className="uppercase font-Suez flex gap-5 items-center text-sm">
          <li className="hover-effect hover:text-primary p-2 rounded-md">
            Apparels
          </li>
          <li className="hover-effect hover:text-primary p-2 rounded-md">
            Shoes
          </li>
          <li className="hover-effect hover:text-primary p-2 rounded-md">
            Apparels
          </li>
          <li className="hover-effect hover:text-primary p-2 rounded-md">
            Gift
          </li>
        </ul>

        <div className="flex gap-5 items-center">
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

        <div className="flex gap-1 items-center">
          <button className="font-Suez px-5 py-2 rounded text-sm text-primary uppercase hover-effect">
            Sign Up
          </button>

          <button className="font-Suez border-[3px] px-5 py-2 border-primary rounded text-sm text-primary uppercase hover-effect">
            Login
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
