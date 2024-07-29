import "../index.css";

function Banner() {
  return (
    <div className="bg-lightGrey mb-5">
      <div className="container mx-auto md:flex md:flex-row md:items-center md:justify-between flex flex-col gap-5 items-center justify-center p-5">
        <h4 className="text-darkGrey font-Suez uppercase md:text-sm text-base">
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
