import Image from "next/image";
import { FaRegKeyboard } from "react-icons/fa6";
import meetUser from "../../../assets/images/meetUser.png"
import { IoIosVideocam } from "react-icons/io";
import Link from "next/link";

const Banner = () => {
    return (
        <div className=" flex flex-col  md:flex-row justify-around items-center h-screen px-3">

            <div className="md:w-1/2 justify-start ">
                <div className="my-7">

                    <h1 className=" sm:text-2xl md:text-4xl font-normal   ">A Communication App where everyone cant talk and share Moments as they in front of each Other</h1>
                    <p className="my-3">You Can Freely share your thought to other by RealMeet.</p>

                </div>
                <div className="flex flex-col  justify-center   md:flex-row  gap-10 space-y-1">

                    <Link href={`/meeting/1`}>
                        <button
                            class=" flex items-center gap-2 select-none rounded bg-blue-500 w-[250px] py-2 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            <IoIosVideocam className="h-8 w-8" />   New Meeting
                        </button>
                    </Link>


                    <div className="flex   items-center border border-b-neutral-600 w-[310px] ">
                        <FaRegKeyboard className=" h-7 w-7" />
                        <input type=" text " placeholder="Enter Code" className="outline-none px-3 py-2"></input>
                    </div>
                    <div className="flex justify-center items-center cursor-pointer ">
                        <p className=" text-gray-600 text-lg">join</p>
                    </div>
                </div>
            </div>
            <div>

                <Image height={700} width={500} src={meetUser} alt="meet pic"></Image>

            </div>
        </div>
    );
};

export default Banner;