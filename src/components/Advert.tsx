import img from "../assets/images/advertBanner.png";

function Advert() {
  return (
    <div className="p-5">
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="my-2 h-[540px]"
      ></div>
    </div>
  );
}

export default Advert;
