import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CallToAction from "./components/CallToAction";
import ProductDisplay from "./components/ProductDisplay";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import SearchCard from "./components/SearchCard";
import Advert from "./components/Advert";
import MailSignUp from "./components/MailSignUp";

import Product1 from "./assets/images/products/small-product-1.png";
import Product2 from "./assets/images/products/small-product-2.png";
import Product3 from "./assets/images/products/small-product-3.png";
import Product4 from "./assets/images/products/small-product-4.png";
import Product5 from "./assets/images/products/small-product-5.png";

function App() {
  const [showLeftSection, setShowLeftSection] = useState(true);

  const toggleLeftSection = () => {
    setShowLeftSection(!showLeftSection);
  };

  const products = [
    {
      id: 0,
      image: Product1,
      title: "Hargrave Ankle boot",
      store: "Superbalist",
      price: 500,
      discount: "-40% Off",
      inventory: "",
    },
    {
      id: 1,
      image: Product2,
      title: "Cameron leather ",
      store: "Superbalist",
      price: 539,
      discount: "",
      inventory: "Low stock",
    },
    {
      id: 2,
      image: Product3,
      title: "Grayson Brogue",
      store: "Superbalist",
      price: 420,
      discount: "-40% Off",
      inventory: "Low stock",
    },
    {
      id: 3,
      image: Product4,
      title: "Orca",
      store: "Superbalist",
      price: 500,
      discount: "-40% Off",
      inventory: "Low stock",
    },
    {
      id: 4,
      image: Product5,
      title: "Jean Hiker Boots",
      store: "Superbalist",
      price: 600,
      discount: "",
      inventory: "",
    },
  ];

  return (
    <>
      <Header />
      <Banner />
      <div className="container mx-auto px-4 lg:grid lg:grid-cols-4">
        {showLeftSection && (
          <div className="hidden lg:block">
            <SearchCard toggleLeftSection={toggleLeftSection} />
            <Advert />
            <MailSignUp />
          </div>
        )}
        <div
          className={
            showLeftSection ? "lg:col-span-3 lg:pl-5" : "lg:col-span-4"
          }
        >
          <CallToAction />
          <ProductDisplay />

          <div className="flex items-center px-3 my-10">
            <h4 className="w-full text-black font-Suez uppercase text-xl mb-1 inline-block">
              More from <span className="text-primary">Boots</span>
            </h4>
            <div className="w-full h-[2px] bg-darkGrey"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 my-10">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                store={product.store}
                discount={product.discount}
                inventory={product.inventory}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
