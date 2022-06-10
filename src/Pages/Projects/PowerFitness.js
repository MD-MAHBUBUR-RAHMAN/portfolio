import React from "react";
import fitness1 from "../../assets/Power Fitness (1).png";
import fitness2 from "../../assets/Power Fitness (2).png";
import fitness3 from "../../assets/Power Fitness (3).png";

const PowerFitness = () => {
  return (
    <div className="md:w-3/4 mx-auto">
      <h2 className="p-5 my-5 text-xl text-center font-extrabold">
        Power Fitness
      </h2>
      <div className="grid lg:grid-cols-3 gap-5 justify-evenly">
        <div className="border">
          <h3 className="p-5 my-5 text-xl">LoginForm</h3>
          <img className="md:w-[400px] md:h-[400px]" src={fitness1} alt="" />
        </div>
        <div>
          <div className="md:h-[400px] md:overflow-y-scroll border">
            <img className="md:w-[400px] mx-auto " src={fitness3} alt="" />
          </div>
        </div>
        <div className="border">
          <h3 className="p-5 my-5 text-xl">Card Section</h3>
          <img className="md:w-[400px] md:h-[400px]" src={fitness2} alt="" />
        </div>
      </div>
      <div className="p-5 my-5 text-xl ">
        This App is for gym instructor who provides many fitness services.
        Through this app, anyone can book any service given provided by the
        instructor. Checkout page is not developed right now because server-side
        is not created for this application. When needed sserver side would be
        created for checkout activities.
      </div>
      <ul className="p-5 my-5 text-xl ">
        <li>Used Technology:</li>
        <li>• React JS and React Router</li>
        <li>• Firebase Authentication and Firebase Hooks</li>
        <li>• React Bootstrap</li>
        <li></li>
      </ul>
    </div>
  );
};

export default PowerFitness;
