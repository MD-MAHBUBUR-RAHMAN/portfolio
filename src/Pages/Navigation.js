import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ route }) => {
  const { menue, link } = route;
  return (
    <div className="text-center">
      <li className="md:mr-20 md:py-3 font-semibold ">
        <Link
          className="md:hover:bg-[#023047] md:p-3 rounded hover:text-white"
          to={link}
        >
          {menue}
        </Link>
      </li>
    </div>
  );
};

export default Navigation;
