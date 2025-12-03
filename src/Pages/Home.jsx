import React from "react";
import Banner from "./Banner/Banner";
import HowitWorks from "./HowWorks/HowitWorks";
import Services from "./Services/Services";
import Brands from "./Brands/Brands";

const Home = () => {
  return (
    <div className="">
      <div>
        <Banner></Banner>
      </div>
      <div>
        <HowitWorks></HowitWorks>
      </div>
      <div>
        <Services></Services>
      </div>
      <div>
        <Brands></Brands>
      </div>
    </div>
  );
};

export default Home;
