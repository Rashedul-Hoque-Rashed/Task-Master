import imgBn from "../../../assets/Images/banner.png";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {

    return (
        <div className="px-6 py-10 bg-[#0B1635]">
            <div className="grid lg:grid-cols-2 grid-cols-1 rounded-lg">
                <div>
                    <div className="flex flex-col justify-center items-center lg:items-start h-full">
                        <h1 className="text-2xl font-bold text-[#00bbc9]">Your Ultimate Productivity Companion</h1>
                        <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl text-center lg:text-start my-2 text-white">
                        Effortlessly Organize, Prioritize, and Conquer Tasks
                        </h2>
                        <Link to='/dashboard' className="text-base font-bold bg-[#0B1635] text-[#00bbc9] border-2 border-[#00bbc9] px-4 py-2 mt-6 rounded-xl hover:text-white hover:bg-[#00bbc9] flex items-center gap-2">
                            Let&#39;s Explore <GoArrowUpRight className="h-6 w-6" />
                        </Link>
                    </div>
                </div>
                <div className="">
                    <img src={imgBn} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;