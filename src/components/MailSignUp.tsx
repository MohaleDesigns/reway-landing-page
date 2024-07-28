import React from "react";
import { BiEnvelope } from "react-icons/bi";
import "../index.css";

function MailSignUp() {
  return (
    <div>
      <div className="relative mb-2 flex items-center flex-col justify-center bg-primary p-5">
        <p className="text-white text-2xl absolute top-0 right-2 hover-effect hover:text-red-500">
          x
        </p>
        <div className="mb-3 flex items-center flex-col justify-center">
          <BiEnvelope style={{ color: "#ffffff", fontSize: "40px" }} />
          <h4 className="text-white font-Suez uppercase text-base">
            Sign up to our mailing list!
          </h4>
        </div>

        <div className="flex items-center gap-3 flex-col justify-center">
          <div className="relative mb-4">
            <label
              className="block text-white text-base font-bold mb-2 uppercase"
              htmlFor="quantitySelect"
            >
              Email
            </label>
            <div className="flex items-center relative">
              <input
                placeholder="Enter email address"
                className="p-2 w-full text-darkGrey/50 font-bold appearance-none uppercase"
              />
            </div>
          </div>

          <button className="font-Suez px-8 py-3 text-lg text-primary uppercase hover-effect bg-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default MailSignUp;
