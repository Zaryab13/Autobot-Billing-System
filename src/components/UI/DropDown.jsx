import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropDown = ({ listOfItems, title, icon, className, width = "w-[16rem]" }) => {
  const [selectedOption, setSelectedOption] = useState(title);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const dropdownRef = useRef(null);

  const classes = `${className} ${width} relative flex items-center justify-between gap-2 border bg-white border-gray-400 px-3 py-3 cursor-pointer font-bold w-40 transition-all focus:border focus:border-orange-500`;

  const toggleDropDownHandler = () => {
    setToggleDropDown((prevState) => !prevState);
  };

  const closeDropDown = () => {
    setToggleDropDown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropDown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className={classes} onClick={toggleDropDownHandler} ref={dropdownRef}>
      <div className="flex items-center gap-2">
        <div className="text-red-500 text-2xl">{icon}</div>
        <div className="capitalize">{selectedOption}</div>
      </div>

      <IoIosArrowDown />
      {toggleDropDown && (
        <div className={`absolute top-14 left-0 py-2 bg-slate-100 ${width} rounded-md flex flex-col gap-2`}>
          {listOfItems.map((item, index) => (
            <span
              key={index}
              className="capitalize hover:bg-blue-400 hover:text-white/80 py-1 px-2 transition-all"
              onClick={() => {
                setSelectedOption(item);
                closeDropDown();
              }}
            >
              {item}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
