import React from "react";
import img1 from "../../assets/MR TOOLS CORP (1).png";
import img2 from "../../assets/MR TOOLS CORP (3).png";
import img3 from "../../assets/MR TOOLS CORP (2).png";
import live from "../../assets/link.png";
import git from "../../assets/github.png";
import server from "../../assets/data-storage.png";

const MrTools = () => {
  return (
    <div className="md:w-3/4 mx-auto">
      <h2 className="p-5 my-5 text-2xl lg:text-5xl text-center font-extrabold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
        MR TOOLS CORP
      </h2>
      <div className="grid lg:grid-cols-3 gap-5 justify-evenly">
        <div className="border ">
          <h3 className="p-5  text-xl font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Manage Order
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
            Manage Products
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
        <p>
          This App is used to Manage Wholesale Tools Manufacturer’s products. To
          appear dashboard, one needs to register and login into the app. A user
          only gets three menus on the dashboard. It has also an admin role.
          Only the admin can manage all products of this app. Use a protective
          route to place an order so login is mandatory. JWT is used on the
          server for authorization. Also. env is used for security purposes.
        </p>
      </div>
      <ul className="p-5 my-5 text-xl ">
        <li className="font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Used Technology:
        </li>
        <li>• React JS and React Router </li>
        <li>
          • React Hook form for form submission and React Query for data
          management.
        </li>
        <li>• Firebase Authentication and Firebase Hooks</li>
        <li>• Tailwind CSS and DaisyUI CSS library.</li>
      </ul>
      <div className="flex justify-center gap-20 pb-10">
        <a href="https://mr-tools-corp.web.app/" target="_blanck">
          <img
            className="w-14 rounded-lg animate-pulse bg-indigo-500 p-1"
            src={live}
            alt=""
          />
        </a>
        <a
          href="https://github.com/MD-MAHBUBUR-RAHMAN/manufacturer-client-assignment-twelve"
          target="_blanck"
        >
          <img
            className="w-14 rounded-lg animate-pulse bg-indigo-500 p-1"
            src={git}
            alt=""
          />
        </a>
        <a
          href="https://github.com/MD-MAHBUBUR-RAHMAN/manufacturer-server-assignment-twelve"
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

export default MrTools;
