import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import "../index.css";

function Footer() {
  return (
    <div className="bg-superDarkGrey ">
      <div className="container mx-auto flex-col gap-5 md:flex-row flex items-start justify-between rounded-md px-5 py-16">
        <div className="flex items-center gap-5 justify-between">
          <div>
            <h4 className="text-white font-Suez pl-2 text-xl">Account</h4>
            <ul className="font-PTSans text-darkGrey font-semibold text-lg">
              <li className="hover-effect hover:text-primary px-2 rounded-md">
                Account Details
              </li>
              <li className="hover-effect hover:text-primary px-2 rounded-md">
                Orders
              </li>
              <li className="hover-effect hover:text-primary px-2 rounded-md">
                Returns and Exchanges
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-Suez pl-2 text-xl">The Company</h4>
            <ul className="font-PTSans text-darkGrey font-semibold text-lg">
              <li className="hover-effect hover:text-primary px-2 rounded-md">
                About Us
              </li>
              <li className="hover-effect hover:text-primary px-2 rounded-md">
                Careers
              </li>
              <li className="hover-effect hover:text-primary px-2 rounded-md">
                Contact
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="text-white font-Suez pl-2 text-xl">Follow Us!</h4>
          <div className="pl-2 pt-1 flex gap-5">
            <FaFacebookSquare
              className="hover-effect hover:text-primary rounded-md"
              style={{ color: "#ffffff", fontSize: "40px" }}
            />
            <IoLogoInstagram
              className="hover-effect hover:text-primary rounded-md"
              style={{ color: "#ffffff", fontSize: "40px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
