import React from "react";
import "../index.css";

function Banner() {
  return (
    <div className="bg-lightGrey mb-5">
      <div className="container mx-auto flex items-center justify-between rounded-md p-5">
        <h4 className="text-darkGrey font-Suez uppercase text-sm">
          Adventure is just around the corner!
        </h4>

        <div className="flex gap-1 items-center">
          <button className="font-Suez border-[3px] px-5 py-2 border-primary rounded text-sm text-primary uppercase hover-effect">
            Find a store
          </button>
          <button className="font-Suez px-5 py-1 rounded text-sm text-darkGrey uppercase">
            Not in South Africa?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
