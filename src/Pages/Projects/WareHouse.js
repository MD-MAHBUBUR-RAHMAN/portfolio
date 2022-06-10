import React from "react";
import img1 from "../../assets/WARE HOUSE BD (1).png";
import img2 from "../../assets/WARE HOUSE BD (2).png";
import img3 from "../../assets/WERE HOUSE BD(3).png";
import live from "../../assets/link.png";
import git from "../../assets/github.png";
import server from "../../assets/data-storage.png";

const WareHouse = () => {
  return (
    <div className="md:w-3/4 mx-auto">
      <h2 className="p-5 my-5 text-2xl lg:text-5xl text-center font-extrabold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
        WARE HOUSE BD
      </h2>
      <div className="grid lg:grid-cols-3 gap-5 justify-evenly">
        <div className="border ">
          <h3 className="p-5  text-xl font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Manage Inventory
          </h3>
          <img
            className="md:w-[400px] md:h-[400px] mx-auto"
            src={img1}
            alt=""
          />
        </div>
        <div className="border ">
          <div className="md:h-[500px] md:overflow-y-scroll ">
            <h3 className="p-5  text-xl font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Responsive View
            </h3>
            <img className="md:w-full mx-auto py-5" src={img2} alt="" />
          </div>
        </div>
        <div className="border">
          <h3 className="p-5 text-xl font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Manage Order
          </h3>
          <img
            className="md:w-[400px] md:h-[400px] mx-auto"
            src={img3}
            alt=""
          />
        </div>
      </div>
      <div className="p-5 my-5 text-xl ">
        <p className="font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Sumary
        </p>
        This is a stock management app.This App is used to Manage Electronics
        products as stock.Using this app one can add and delete the product. But
        before that one has to log in
      </div>
      <ul className="p-5 my-5 text-xl ">
        <li className="font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Used Technology:
        </li>
        <li>• Used React JS as frontend and React Router for navigation. </li>
        <li>• React Hook form used for the form element</li>
        <li>
          • Firebase and Firebase Hooks are used for the Authentication system.{" "}
        </li>
        <li>• Tailwind CSS</li>
      </ul>
      <div className="flex justify-center gap-20 pb-10">
        <a href="https://ware-house-management.web.app/" target="_blanck">
          <img
            className="w-14 rounded-lg animate-pulse bg-indigo-500 p-1"
            src={live}
            alt=""
          />
        </a>
        <a
          href="https://github.com/MD-MAHBUBUR-RAHMAN/warehousebd-assignment-elaven"
          target="_blanck"
        >
          <img
            className="w-14 rounded-lg animate-pulse bg-indigo-500 p-1"
            src={git}
            alt=""
          />
        </a>
        <a
          href="https://github.com/MD-MAHBUBUR-RAHMAN/warehousebd-servet-assignment-elaven"
          target="_blanck"
        >
          <img
            className="w-14 rounded-lg animate-pulse bg-indigo-500 p-1"
            src={server}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default WareHouse;
