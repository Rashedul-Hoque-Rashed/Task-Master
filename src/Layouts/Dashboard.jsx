import { useState, useEffect, useContext } from "react";
import { CgMenuLeftAlt, CgClose } from "react-icons/cg";
import { LuLogOut } from "react-icons/lu";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../assets/Images/logo.png";
import { AuthContext } from "../Provider/AuthProvider";




const Dashboard = () => {

    const [showSidebar, setShowSidebar] = useState(window.innerWidth > 768);
    const [isTabletOrMobile, setIsTabletOrMobile] = useState(
        window.innerWidth <= 768
    );
    const { user, logOut } = useContext(AuthContext);
    useEffect(() => {
        const checkScreenSize = () => {
            const isMobile = window.innerWidth <= 768;
            setIsTabletOrMobile(isMobile);
            if (isMobile) {
                setShowSidebar(false);
            } else {
                setShowSidebar(true);
            }
        };
        window.addEventListener("resize", checkScreenSize);
        checkScreenSize();
        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const closeSidebar = () => {
        setShowSidebar(false);
    };
    return (
        <div className="max-w-7xl mx-auto ">
            <div className="lg:grid lg:grid-cols-12 grid-cols-none">
                <div className="lg:col-span-2">
                    {isTabletOrMobile && ( 
                        <button className="p-5 fixed z-10 overflow-auto" onClick={toggleSidebar}>
                            {showSidebar ? (
                                <CgClose className="text-3xl" />
                            ) : (
                                <CgMenuLeftAlt className="w-10 h-10 bg-base-300 rounded-full p-2" />
                            )}
                        </button>
                    )}

                    {showSidebar && (
                        <div
                            className={`fixed h-screen w-auto bg-[#0B1635] shadow-lg z-50 transition-transform transform duration-500 ease-in-out ${showSidebar ? "translate-x-0" : "-translate-x-full"
                                }`}
                        >
                            <div className="px-6 py-4 top-0 left-0 h-screen bg-[#0B1635] sidebar-content">
                                <div className="flex justify-center items-center gap-2">
                                    <Link to='/'><img className="w-36" src={logo} alt="" /></Link>
                                    <br />
                                    {isTabletOrMobile && (
                                        <button className="lg:hidden block" onClick={closeSidebar}>
                                            <CgClose className="text-3xl text-white" />
                                        </button>
                                    )}
                                </div>
                                <div className="flex justify-between items-center flex-col gap-5 py-5">
                                    <div className="avatar">
                                        <div className="w-14 rounded-full">
                                            <img src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-bold text-center text-white">
                                        {user?.displayName}
                                    </h2>
                                </div>
                                <div className="px-2 md:px-0 lg:py-6 py-3 space-y-2 md:space-y-0 md:space-x-2 lg:text-xl text-base font-medium text-black flex flex-col justify-between h-[65%]">
                                    <ul className=" rounded-md text-black focus:outline-none focus:text-black focus:bg-gray-700 whitespace-nowrap  text-start">
                                        <li><NavLink to='/' className={({ isActive }) =>
                                            isActive ? "text-base font-bold text-[#00bbc9] mb-2" : "text-base font-semibold mb-2 text-white"
                                        }>
                                            Home
                                        </NavLink></li>
                                        <li><NavLink to='/dashboard/taskManage' className={({ isActive }) =>
                                            isActive ? "text-base font-bold text-[#00bbc9] mb-2" : "text-base font-semibold mb-2 text-white"
                                        }>
                                            Dashboard
                                        </NavLink></li>
                                        <li><NavLink to='/dashboard/counter' className={({ isActive }) =>
                                            isActive ? "text-base font-bold text-[#00bbc9] mb-2" : "text-base font-semibold mb-2 text-white"
                                        }>
                                            Counter
                                        </NavLink></li>
                                        <li><NavLink to='/about' className={({ isActive }) =>
                                            isActive ? "text-base font-bold text-[#00bbc9] mb-2" : "text-base font-semibold mb-2 text-white"
                                        }>
                                            About Us
                                        </NavLink></li>
                                        <li><NavLink to='/contact' className={({ isActive }) =>
                                            isActive ? "text-base font-bold text-[#00bbc9] mb-2" : "text-base font-semibold mb-2 text-white"
                                        }>
                                            Contact Us
                                        </NavLink></li>
                                    </ul>
                                    <button
                                        className="text-base font-bold bg-none text-[#00bbc9] border-2 border-[#00bbc9] px-4 py-2 mt-6 rounded-xl hover:text-white hover:bg-[#00bbc9] flex items-center gap-2"
                                        onClick={() => logOut()}
                                    >
                                        Log Out <LuLogOut className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>

                <main className="lg:col-span-10">
                    <Outlet></Outlet>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
