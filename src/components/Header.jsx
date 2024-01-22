import React, { useEffect, useRef, useState } from "react";
import { FaUserCircle} from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { GrPowerReset } from "react-icons/gr";
import { CgLogOut } from "react-icons/cg";
import Modal from "./UI/Modal";
// import { useModalToggleContext } from "../store/modal-toggle-context";

const profileSubMenu =[
  {
    title: 'Settings',
    icon: React.createElement(IoMdSettings)
  },
  
  {
    title: 'Reset Password',
    icon: React.createElement(GrPowerReset)
  },
  {
    title: "Logout",
    icon: React.createElement(CgLogOut)
  },

]

const Header = () => {

  // const {openModal,closeModal} = useModalToggleContext();
  const [profileDropDown, setProfileDropDown] = useState(false);
  const profileDropDownSubMenu = useRef()

  const userProfileDropDownHandler = () => {
    setProfileDropDown((prevState)=> !prevState)  
  }
  const closeProfileDropDown = () => {
    setProfileDropDown(false)
  }
  

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileDropDownSubMenu.current && !profileDropDownSubMenu.current.contains(event.target)) {
       closeProfileDropDown();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  return (
    <header className="shadow-md">
      <nav className="flex items-center justify-between py-4 px-8 bg-slate-300">
        <div className="flex items-center gap-2">
          <div className="bg-logo w-[2.5rem] h-[2.5rem] bg-cover" />
          <div className="tracking-widest font-bold uppercase">AutoBot</div>
        </div>
        <div className="relative">
          <div className="flex gap-2 p-2 cursor-pointer hover:bg-slate-400/20 transition-all rounded-xl" ref={profileDropDownSubMenu} onClick={userProfileDropDownHandler}>
            <FaUserCircle className="w-[1.5rem] h-[1.5rem]" />
            <span className="font-semibold">User Name</span>
          </div>

          {profileDropDown && <div className="absolute z-10 top-16 right-4 bg-slate-200 rounded-md pt-4 w-[12rem] flex flex-col">
            {profileSubMenu.map((item,index)=>{
              return (<span className={`flex items-center gap-3 px-6 py-2 cursor-pointer hover:bg-slate-300 transition-all ${index === 2? "border-t-2 border-black" : ''}`}>{item.icon}  {item.title}</span>)
            })}
          </div>}
        </div>
      </nav>

      {/* <Modal>
          

      </Modal> */}
    </header>
  );
};

export default Header;
