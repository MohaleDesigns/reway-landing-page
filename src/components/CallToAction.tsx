import React from "react";
import "../index.css";

function CallToAction() {
  return (
    <div
      style={{
        backgroundImage: "url('../src/assets/images/cta.png')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className="mb-5 mx-auto flex items-center justify-between p-5"
    >
      <div>
        <h4 className="text-white font-Suez uppercase text-2xl">
          Summer sale!
        </h4>
        <h4 className="text-white font-Suez uppercase text-xl">
          Up to 50% off!
        </h4>
      </div>

      <div>
        <button className="font-Suez border-[3px] px-5 py-2 border-white rounded text-sm text-white uppercase hover-effect">
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default CallToAction;
