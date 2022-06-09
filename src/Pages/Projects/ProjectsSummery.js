import React from "react";

const ProjectsSummery = () => {
  return (
    <section className="md:w-3/4 lg:w-5/6 mx-auto mt-10">
      <h2 className="text-4xl font-mono">Projects</h2>
      <div className="md:flex justify-between gap-5 flex-shrink">
        <div className="mx-5 md:mx-0 md:w-64 lg:w-96 border p-5 mt-5 shadow-lg rounded-2xl">
          <h3 className="text-2xl font-bold my-5">projects name</h3>
          <p className="w-full">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quia vel officiis ullam fugiat iure possimus voluptatum ipsa modi
            laboriosam.
          </p>
          <button className="bg-slate-800 p-5 rounded text-white text-xl my-5">
            Detail
          </button>
        </div>
        <div className="mx-5 md:mx-0 md:w-64 lg:w-96  border p-5 mt-5 shadow-lg rounded-2xl">
          <h3 className="text-2xl font-bold my-5">projects name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quia vel officiis ullam fugiat iure possimus voluptatum ipsa modi
            laboriosam.
          </p>
          <button className="bg-slate-800 p-5 rounded text-white text-xl my-5">
            Detail
          </button>
        </div>
        <div className="mx-5 md:mx-0 md:w-64 lg:w-96  border p-5 mt-5 shadow-lg rounded-2xl">
          <h3 className="text-2xl font-bold my-5">projects name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quia vel officiis ullam fugiat iure possimus voluptatum ipsa modi
            laboriosam.
          </p>
          <button className="bg-slate-800 p-5 rounded text-white text-xl my-5">
            Detail
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSummery;
