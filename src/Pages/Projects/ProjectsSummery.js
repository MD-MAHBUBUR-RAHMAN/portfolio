import React from "react";
import MRTOOL from "../../assets/MR TOOLS CORP.png";
import PowerFitness from "../../assets/Power Fitness.png";
import Warehouse from "../../assets/WARE HOUSE BD.png";

const ProjectsSummery = () => {
  return (
    <section className="bg-gray-200">
      <div className="md:w-3/4 lg:w-5/6 mx-auto pt-10">
        <h2 className="text-4xl font-mono border-l-4 border-l-amber-500 border-b-4 border-b-amber-500">
          <p className="ml-5" data-aos="fade-left" data-aos-duration="1000">
            Projects
          </p>
        </h2>
        <div className="md:flex justify-between gap-5 flex-shrink">
          <div
            className="mx-5 md:mx-0 md:w-64 lg:w-96 border p-5 mt-5 shadow-lg rounded-2xl"
            data-aos="flip-left"
          >
            <div className="h-60 overflow-clip">
              <img src={Warehouse} alt="" />
            </div>
            <h3 className="text-2xl font-bold my-5">MR TOOLS CORP</h3>
            <p className="w-full">
              This is a stock management app. This App is used to Manage
              Electronics products as stock. Using this app one can add and
              delete the product. But before that one has to log in first.
            </p>
            <button className="bg-gradient-to-bl from-indigo-500 to-pink-500 px-5 rounded text-white text-xl my-5">
              Detail
            </button>
          </div>
          <div
            data-aos="zoom-in-right"
            className="mx-5 md:mx-0 md:w-64 lg:w-96  border p-5 mt-5 shadow-lg rounded-2xl"
          >
            <div className="h-60 overflow-clip">
              <img src={MRTOOL} alt="" />
            </div>
            <h3 className="text-2xl font-bold my-5">WAREHOUSE</h3>
            <p>
              This App is used to Manage Wholesale Tools Manufacturer’s
              products.
            </p>
            <button className="absolute bottom-5 bg-gradient-to-bl from-indigo-500 to-pink-500 px-5 rounded text-white text-xl my-5">
              Detail
            </button>
          </div>
          <div
            data-aos="flip-right"
            className="mx-5 md:mx-0 md:w-64 lg:w-96  border p-5 mt-5 shadow-lg rounded-2xl"
          >
            <div className="h-60 overflow-clip">
              <img src={PowerFitness} alt="" />
            </div>
            <h3 className="text-2xl font-bold my-5">POWER FITNESS</h3>
            <p>
              This App is for gym instructor who provides many fitness
              services.Through this app, anyone can book any service given
              provided by the instructor.
            </p>
            <button className="bg-gradient-to-bl from-indigo-500 to-pink-500 px-5 rounded text-white text-xl my-5">
              Detail
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSummery;
