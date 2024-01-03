import Image from 'next/image';
import React from 'react';
import meetImg from "../../assets/images/meet.png"

const Header = () => {
    return (
        <div className=' px-1 fixed'>
            <div className=' flex justify-start items-center gap-2'>
                <Image src={meetImg} alt='meet pic' height={40} width={40}></Image>
                <h1 className=' text-2xl'> Real Meet</h1>
            </div>
        </div>
    );
};

export default Header;