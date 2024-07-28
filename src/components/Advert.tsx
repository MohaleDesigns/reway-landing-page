import React from "react";

function Advert() {
  return (
    <div className="p-5">
      <div
        style={{
          backgroundImage: "url('../src/assets/images/advertBanner.png')",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="my-2 h-[540px]"
      ></div>
    </div>
  );
}

export default Advert;
