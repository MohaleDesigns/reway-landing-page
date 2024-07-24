import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

function App() {
  return (
    <>
      <Header />
      <Banner />
      <div className="container mx-auto grid grid-cols-3 gap-2">
        <div>
          <SearchCard />
          <Advert />
          <MailSignUp />
        </div>
        <div className="col-span-2">
          <CallToAction />
          <ProductDisplay />
          <ProductCard />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
