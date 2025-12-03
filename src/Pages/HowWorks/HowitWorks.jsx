import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

const HowitWorks = () => {
  return (
    <div className="space-y-4 w-10/12 mx-auto my-11"> 
      <h1 className="text-2xl text-secondary font-bold">How it Works</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4" >

        <div className="bg-[#E7EAEB] p-7 rounded-3xl space-y-3 ">
          <span>
            <TbTruckDelivery />
          </span>
          <h2 className="text-xl font-semibold">Booking Pick & Drop</h2>
          <p>From personal packages to <br />
          business shipments - we deliver <br />
          on time, every time</p>
        </div>

        <div className="bg-[#E7EAEB] p-7 rounded-3xl space-y-3">
          <span>
            <TbTruckDelivery />
          </span>
          <h2 className="text-xl font-semibold">Cash On Delivery</h2>
          <p>From personal packages to <br />
          business shipments - we deliver <br />
          on time, every time</p>
        </div>

        <div className="bg-[#E7EAEB] p-7 rounded-3xl space-y-3 ">
          <span>
            <TbTruckDelivery />
          </span>
          <h2 className="text-xl font-semibold">Delivery Hub</h2>
          <p>From personal packages to <br />
          business shipments - we deliver <br />
          on time, every time</p>
        </div>

        <div className="bg-[#E7EAEB] p-7 rounded-3xl space-y-3 ">
          <span>
            <TbTruckDelivery />
          </span>
          <h2 className="text-xl font-semibold">Booking SME & Corporate</h2>
          <p>From personal packages to <br />
          business shipments - we deliver <br />
          on time, every time</p>
        </div>
      </div>
    </div>
  );
};

export default HowitWorks;
