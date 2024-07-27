import React from "react";
import { BiEnvelope } from "react-icons/bi";
import "../index.css";

function MailSignUp() {
  return (
    <div>
      <div className="relative mb-2 flex items-center flex-col justify-center bg-primary rounded p-5">
        <p className="text-white text-2xl absolute top-0 right-2 hover-effect hover:text-red-500">
          x
        </p>
        <div className="mb-3 flex items-center flex-col justify-center">
          <BiEnvelope style={{ color: "#ffffff", fontSize: "40px" }} />
          <h4 className="text-white font-Suez uppercase text-lg">
            Sign up to our mailing list!
          </h4>
        </div>

        <div className="flex items-center gap-3 flex-col justify-center">
          <input
            className="px-2 w-full text-lg"
            type="email"
            placeholder="Enter email address"
          />

          <button className="font-Suez px-8 py-3 text-lg text-primary uppercase hover-effect bg-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default MailSignUp;
