// import React, { useState } from "react";
// import MenuButton from "./Button/MenuButton";
// import Xbutton from "./Button/Xbutton";
import Navigation from "./Navigation";

const Navbar = () => {
  //   const [open, setOpen] = useState(false);
  const routes = [
    { id: 1, menue: "HOME", link: "/" },
    { id: 2, menue: "PROJECTS", link: "projects" },
    { id: 3, menue: "CONTACT", link: "contsct" },
  ];
  return (
    <nav className="bg-[#8ecae6]">
      {/* <div onClick={() => setOpen(!open)} className="md:hidden">
        {open ? <Xbutton /> : <MenuButton />}
      </div> */}
      <ul
        className="md:flex justify-center"
        // className={`md:flex justify-center bg-slate-300 w-full absolute duration-500 ease-in ${
        //   open ? "top-12" : "top-[-120px]"
        // }`}
      >
        {routes.map((route) => (
          <Navigation key={route.id} route={route} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
