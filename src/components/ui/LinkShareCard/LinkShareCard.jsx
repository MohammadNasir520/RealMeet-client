
"use client"
import React from 'react';
import { RxCross2 } from "react-icons/rx";
import { MdContentCopy } from "react-icons/md";

const LinkShareCard = ({ linkShareCardStatus, setLinkShareCardStatus }) => {
    return (
        <div className={`${linkShareCardStatus ? "" : "hidden"}  bg-white h-[310px] w-[350px] rounded-sm flex justify-center items-center p-2`}>

            <div onClick={() => setLinkShareCardStatus(false)} className=' absolute top-2  cursor-pointer right-2 '>
                <RxCross2 className='w-6 h-6' />
            </div>

            <div className='flex flex-col'>
                <div className=''>
                    <h1>Share the meeting link with people you want to add to the meeting</h1>
                </div>
                <div className='flex gap-2 items-center text-base my-2 bg-slate-50 rounded justify-between py-2'>
                    <h1>http://localhost:3000/meeting/1</h1>
                    <MdContentCopy className='h-5 w-5  cursor-pointer' />
                </div>
            </div>
        </div>
    );
};

export default LinkShareCard;