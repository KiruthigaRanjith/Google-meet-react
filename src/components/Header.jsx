import React, { useEffect, useState } from 'react'
import logo from '../assets/logo.png'
import { MdOutlineContactSupport } from "react-icons/md";
import { BiMessageError } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";

function Header() {
    const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <div className='flex justify-between p-3'>
        <div className='flex gap-1 items-center pl-2 cursor-pointer'>
            <img src={logo}/>
            <p className='w-4 text-gray-600 text-xl pb-1 font-semibold'>Meet</p>
        </div>
            
        <div className='flex gap-10 justify-between pt-2'>

        <div className='flex gap-2 text-gray-600 font-semibold'>
        <span>{dateTime.toLocaleString([],{hour:'2-digit', minute:'2-digit', hour12:true})}</span>
            <span> • </span>
            <span>{dateTime.toLocaleString('en-US',{weekday:'short', month:'short', day:'numeric'})}</span>
        </div>

        <div className='flex gap-5 text-2xl'>
        {/* Contact Support Icon with Tooltip */}
      <div className="relative group">
        <MdOutlineContactSupport className="text-gray-600 text-2xl font-extrabold" />
        <span className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs py-1 px-2 rounded transition-opacity">
          Support
        </span>
      </div>

      {/* Message Error Icon with Tooltip */}
      <div className="relative group">
        <BiMessageError className="text-gray-600 text-2xl font-extrabold" />
        <span className="flex w-28 absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs py-1 px-2 rounded transition-opacity">
          Report a problem
        </span>
      </div>

      {/* Settings Icon with Tooltip */}
      <div className="relative group">
        <IoSettingsOutline className="text-gray-600 text-2xl font-extrabold" />
        <span className="absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs py-1 px-2 rounded transition-opacity">
          Settings
        </span>
      </div>
        </div>

        <div className='flex gap-5 text-2xl justify-between  pr-2'>

        <div className="relative group">
        <CgMenuGridO className="text-gray-600 text-2xl font-extrabold" />
        <span className="flex w-22 absolute bottom-[-25px] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-gray-700 text-white text-xs py-1 px-2 rounded transition-opacity">
          Google Apps
        </span>
      </div>

         <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full -mt-1">
    <span className="text-xs">M</span> {/* Replace M with any letter */}
        </div>
        
        </div>
        </div>
    </div>
  )
}

export default Header