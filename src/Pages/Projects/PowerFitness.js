import React from "react";
import fitness1 from "../../assets/Power Fitness (1).png";
import fitness2 from "../../assets/Power Fitness (2).png";
import fitness3 from "../../assets/Power Fitness (3).png";
import live from "../../assets/link.png";
import git from "../../assets/github.png";

const PowerFitness = () => {
  return (
    <div className="md:w-3/4 mx-auto">
      <h2 className="p-5 my-5 text-2xl lg:text-5xl text-center font-extrabold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
        Power Fitness
      </h2>
      <div className="grid lg:grid-cols-3 gap-5 justify-evenly">
        <div className="border ">
          <h3 className="p-5  text-xl font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            LoginForm
          </h3>
          <img
            className="md:w-[400px] md:h-[400px] mx-auto"
            src={fitness1}
            alt=""
          />
        </div>
        <div className="border ">
          <div className="md:h-[500px] md:overflow-y-scroll ">
            <h3 className="p-5  text-xl font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Responsive View
            </h3>
            <img className="md:w-full mx-auto py-5" src={fitness3} alt="" />
          </div>
        </div>
        <div className="border">
          <h3 className="p-5 text-xl font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Card Section
          </h3>
          <img
            className="md:w-[400px] md:h-[400px] mx-auto"
            src={fitness2}
            alt=""
          />
        </div>
      </div>
      <div className="p-5 my-5 text-xl ">
        <p className="font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Sumary
        </p>
        This App is for gym instructor who provides many fitness services.
        Through this app, anyone can book any service given provided by the
        instructor. Checkout page is not developed right now because server-side
        is not created for this application. When needed sserver side would be
        created for checkout activities.
      </div>
      <ul className="p-5 my-5 text-xl ">
        <li className="font-bold bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Used Technology:
        </li>
        <li>• React JS and React Router</li>
        <li>• Firebase Authentication and Firebase Hooks</li>
        <li>• React Bootstrap</li>
      </ul>
      <div className="flex justify-center gap-20 pb-10">
        <a href="https://power-fitness-cd742.firebaseapp.com/" target="_blanck">
          <img
            className="w-14 rounded-lg animate-pulse bg-indigo-500 p-1"
            src={live}
            alt=""
          />
        </a>
        <a
          href="https://github.com/MD-MAHBUBUR-RAHMAN/power-fitness-assignment-ten"
          target="_blanck"
        >
          <img
            className="w-14 rounded-lg animate-pulse bg-indigo-500 p-1"
            src={git}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default PowerFitness;
