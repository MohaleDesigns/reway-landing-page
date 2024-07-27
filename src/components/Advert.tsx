import React from "react";

function Advert() {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url('../src/assets/images/advert.png')",
          backgroundPosition: "right",
          backgroundSize: "cover",
        }}
        className="my-2 h-[600px]"
      ></div>
    </div>
  );
}

export default Advert;
