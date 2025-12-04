import React from "react";
import Banner from "./Banner/Banner";
import HowitWorks from "./HowWorks/HowitWorks";
import Services from "./Services/Services";
import Brands from "./Brands/Brands";
import Reviews from "./Reviews/Reviews";

const reviewsPromise = fetch('/reviews.json').then(res=> res.json())
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

      <div>
        <Reviews reviewsPromise={reviewsPromise}></Reviews>

      </div>
    </div>
  );
};

export default Home;
