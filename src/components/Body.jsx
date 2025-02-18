import { FaRegKeyboard } from "react-icons/fa6";
import React, { useRef, useState, useEffect } from 'react'
import { MdVideoCall } from "react-icons/md";
import Meetings from "./Meetings";

function Body() {

    const scheduledMeets=[
        {
            "title":"Java - weekly team meeting",
            "time":"7:00 PM"
        },
        {
            "title":"Java - weekly team meeting",
            "time":"7:00 PM"
        },
        {
            "title":"Java - weekly team meeting",
            "time":"7:00 PM"
        }
    ]


    const [isClicked, setIsClicked] = useState(false);
    const [value, setValue] = useState('');

    const handleClick=()=>{

        if (!isClicked) {
            setIsClicked(true);
          }
    }

    const handleChange = (e) => {
        const newValue = e.target.value;
        setValue(newValue);
        if (newValue === '') {
          console.log('Input is now empty.');
          setIsChanged(false);
        } else {
          console.log('Input changed to:', newValue);
          setIsChanged(true);
        }
      };

    const [isChanged, setIsChanged] = useState(false);

    const handleChangeFalse=()=>{
            setIsChanged(false);
    }

  return (
    <div className='flex'>
        <div className='justify-start'>
        <div>
        <h1 className='text-5xl w-[70%] text-gray-800 size-full'>Video calls and meetings for everyone</h1>
        <h1 className='text-2xl  w-[70%] text-gray-500
         font-normal mt-1'>Connect, collaborate, and celebrate from anywhere with Google Meet</h1>
        </div>

        <div className='mt-5 flex w-[70%] gap-4 items-center' >
        <button className=' bg-blue-500 w-35 flex items-center font-semibold text-white p-3 rounded-full gap-0.5'>
            <MdVideoCall size={25}/> 
            <p className='text-sm'>New meeting</p>
        </button>
        <div className={`flex gap-5  ${isClicked ? 'border-blue-500 border-3' : 'border-gray-600 hover:border-black border-1 '}  p-2 rounded-2xl`}
        >
        <FaRegKeyboard size={25}/> 
            <input onClickCapture={handleClick} value={value} onChange={handleChange} type="text" className="border-0 focus:outline-none focus:border-none" placeholder='Enter a code or link'></input>
        </div> 

        <button className={`p-4 ${isChanged ? 'text-blue-600 font-medium' : 'text-gray-400'}  `} >Join</button>
        </div>
        <hr className="mt-6 w-[70%] text-gray-600" />
        <a className="flex gap-2 mt-6 text-xs text-gray-600" href='https://meet.google.com/about/redirect/landing-learn-more/?hl=en'>
        <p  className="underline text-blue-500">Learn more</p> about Google Meet</a>
        
        </div>

        <div className='flex flex-col -ml-32 h-[70%] w-[45%] gap-2 border-amber-400 justify-center' >
        {
            scheduledMeets.map((item)=>(<Meetings time={item.time} title={item.title}/>))
        }
        </div>
    </div>
  )
}

export default Body