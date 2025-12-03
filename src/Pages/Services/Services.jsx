import React from "react";
import serviceImg from "../../assets/service.png";

const Services = () => {
  return (
    <div className="bg-secondary p-6 rounded-2xl">
        {/* This is heading and title div  */}
        <div className="my-11">
        <h1 className="text-3xl font-bold text-center text-white">
        Our Services
      </h1>
      <p className="text-center text-gray-500">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>

        </div>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-10/12 mx-auto ">
        <div className="space-y-4 flex flex-col items-center bg-white p-6 rounded-2xl">
          <img src={serviceImg} alt="" />
          <h1 className="text-xl text-center font-semibold">
            Express & Standard <br />
            Delivery
          </h1>

          <p className="text-gray-400">
            We deliver parcels within 24-72 hours in Dhaka, Chittagong, Sylhet,
            Khulna, and Rajshahi. Express delivery available in Dhaka within 4-6
            hours from pick-up to drop-off.
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-center bg-primary p-6 rounded-2xl">
          <img src={serviceImg} alt="" />
          <h1 className="text-xl text-center font-semibold">
            Nationwide Delivery <br />
            Delivery
          </h1>

          <p className="text-gray-400">
            We deliver parcels nationwide with home delivery in every district,
            ensuring your products reach customers within 48–72 hours.{" "}
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-center bg-white p-6 rounded-2xl">
          <img src={serviceImg} alt="" />
          <h1 className="text-xl text-center font-semibold">
            Fulfillment Solution <br />
            Delivery
          </h1>

          <p className="text-gray-400">
            We also offer customized service with inventory management support,
            online order processing, packaging, and after sales support.{" "}
          </p>
        </div>

        <div className="space-y-4 flex flex-col items-center bg-white p-6 rounded-2xl">
          <img src={serviceImg} alt="" />
          <h1 className="text-xl text-center font-semibold">
            Cash on Home Delivery
            <br />
            Delivery
          </h1>

          <p className="text-gray-400">
            100% cash on delivery anywhere in Bangladesh with guaranteed safety
            of your product.{" "}
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-center bg-white p-6 rounded-2xl">
          <img src={serviceImg} alt="" />
          <h1 className="text-xl text-center font-semibold">
            Corporate Service / Contract In Logistics <br />
            Delivery
          </h1>

          <p className="text-gray-400">
            Customized corporate services which includes warehouse and inventory
            management support.{" "}
          </p>
        </div>
        <div className="space-y-4 flex flex-col items-center bg-white p-6 rounded-2xl">
          <img src={serviceImg} alt="" />
          <h1 className="text-xl text-center font-semibold">
            Parcel Return <br />
            Delivery
          </h1>

          <p className="text-gray-400">
            Through our reverse logistics facility we allow end customers to
            return or exchange their products with online business merchants.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
