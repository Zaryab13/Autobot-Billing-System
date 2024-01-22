import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { IoGlobeSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import DropDown from "./UI/DropDown";

const dropDown = [
  {
    title: "Select City",
    icon: React.createElement(IoLocationSharp),
    listOfItems: ["islamabad", "rawalpindi", "peshawar", "swat"],
  },
  {
    title: "Select Branch",
    icon: React.createElement(IoLocationSharp),
    listOfItems: ["islamabad", "rawalpindi", "peshawar", "swat"],
  },
  {
    title: "Select Internet Vender",
    icon: React.createElement(IoGlobeSharp),
    listOfItems: ["islamabad", "rawalpindi", "peshawar", "swat"],
  },
];

const SeachSection = () => {
  return (
    <section className="bg-home-hero bg-center bg-cover w-full h-[20rem] flex items-center justify-center mb-[4rem] relative">
      <div className="absolute bg-black/60 w-full h-full" />
      <form action="" className="flex flex-col items-center gap-y-4">
        <div className="flex items-center gap-4">
          {dropDown.map((item, index) => (
            <DropDown
              key={index}
              listOfItems={item.listOfItems}
              title={item.title}
              icon={item.icon}
            />
          ))}
          <button
            type="submit"
            className="w-12 h-12 rounded-full flex items-center justify-center outline-none bg-[rgba(238,80,87,0.9)] py-2 text-white/90 hover:bg-[rgba(238,80,87,1)]  transition-all"
          >
            <FaSearch className="text-2xl font-black" />
          </button>
        </div>
      </form>
    </section>
  );
};

export default SeachSection;
