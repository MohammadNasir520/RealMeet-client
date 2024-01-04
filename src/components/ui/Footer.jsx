import React from 'react';
import { MdCallEnd } from "react-icons/md";
import { BiSolidMicrophone } from "react-icons/bi";
import { LuVideo } from "react-icons/lu";

const Footer = () => {
    return (
        <div className='h-[80px] bg-white flex justify-center  items-center gap-8'>
            <div className=' bg-gray-500 rounded-full h-8 w-8 flex justify-center items-center cursor-pointer'>
                <BiSolidMicrophone className=' text-white   h-6 w-6' />
            </div>
            <div className='bg-gray-500 rounded-full h-8 w-8 flex justify-center items-center cursor-pointer'>
                <LuVideo className='text-white h-6 w-6' />
            </div>
            <div className='cursor-pointer'>
                <MdCallEnd className='bg-red-500 text-white h-6 w-10 rounded-lg  ' />
            </div>

        </div>
    );
};

export default Footer;