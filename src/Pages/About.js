import React from "react";
import computer from "../assets/computer.jpg";

const About = () => {
  return (
    <section className="">
      <div className="md:w-3/4 mx-auto lg:w-5/6 h-screen md:grid grid-cols-2 justify-center items-center">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
          <p className="px-5 text-xl font-bold py-5">
            Hi! I am <span>MD MAHBUBUR RAHMAN</span>, a web developer focused on
            making quality websites. Coding has been my passion since the days I
            started working with computers but I found myself in development in
            2022. I enjoy creating beautifully designed, intuitive and
            functional websites.
          </p>
          <p className="px-5 text-xl font-bold py-5">
            I make Web Applications, usually with React JS. Although I use React
            Js, picking up a new framework and language isn't a problem.
          </p>
        </div>
        <img src={computer} className="md:w-[400px] p-10 mx-auto" alt="" />
      </div>
    </section>
  );
};

export default About;
