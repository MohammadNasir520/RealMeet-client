import Image from "next/image";
import { FaRegKeyboard } from "react-icons/fa6";
import meetUser from "../../../assets/images/meetUser.png"

const Banner = () => {
    return (
        <div className="flex   justify-around items-center h-screen">

            <div className="w-1/2 justify-start">
                <div className="text-4xl font-normal  my-7"><h1>A Communication App where everyone cant talk and share Moments as they in front of each Other</h1></div>
                <div className="flex gap-10">
                    <button
                        class="select-none rounded bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        New Meeting
                    </button>

                    <div className="flex items-center border border-b-neutral-600">
                        <FaRegKeyboard className=" h-6 w-6" />
                        <input type=" text " placeholder="Enter Code" className="outline-none px-3"></input>
                    </div>
                    <div className="flex justify-center items-center">
                        <p className=" text-gray-600 text-lg">join</p>
                    </div>
                </div>
            </div>
            <div>

                <Image height={400} width={400} src={meetUser} alt="meet pic"></Image>

            </div>
        </div>
    );
};

export default Banner;