import React from 'react'
import logo from '../assets/logo.png'
import { MdOutlineContactSupport } from "react-icons/md";
import { BiMessageError } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";

function Header() {
  return (
    <div className='flex justify-between p-3'>
        <div className='flex gap-1 items-center pl-2 cursor-pointer'>
            <img src={logo}/>
            <p className='w-4 text-gray-600 text-xl pb-1 font-semibold'>Meet</p>
        </div>
            
        <div className='flex gap-10 justify-between pt-2'>

        <div className='flex gap-2 text-gray-600 font-semibold'>
        <span>2:56 PM</span>
            <span> • </span>
            <span>Tue, Feb 18</span>
        </div>

        <div className='flex gap-5 text-2xl'>
        <MdOutlineContactSupport className="text-gray-600 text-2xl font-extrabold"/>

        <BiMessageError className="text-gray-600 text-2xl font-extrabold"/>
        <IoSettingsOutline  className="text-gray-600 text-2xl font-extrabold"/>
        </div>

        <div className='flex gap-5 text-2xl justify-between  pr-2'>
        <CgMenuGridO className="text-gray-600 text-2xl font-extrabold"/>
         <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full -mt-1">
    <span className="text-xs">M</span> {/* Replace M with any letter */}
        </div>
        
        </div>
        </div>
    </div>
  )
}

export default Header