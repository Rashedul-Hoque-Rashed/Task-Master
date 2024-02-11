import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";
import logo from '../../../assets/Images/logo.png'


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const Navigate = useNavigate();

    const handelLogOut = () => {
        logOut()
            .then(res => {
                console.log(res);
                Swal.fire({
                    icon: 'success',
                    title: 'Log out successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate('/');
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2500
                })
            })
    }

    const link = <>
        <li><NavLink to='/' className={({ isActive }) =>
            isActive ? "text-base font-bold text-[#00bbc9] mb-2" : "text-base font-semibold mb-2"
        }>
            Home
        </NavLink></li>
        <li><NavLink to='/dashboard/taskManage' className={({ isActive }) =>
            isActive ? "text-base font-bold text-[#00bbc9] mb-2" : "text-base font-semibold mb-2"
        }>
            Dashboard
        </NavLink></li>
        <li><NavLink to='/about' className={({ isActive }) =>
            isActive ? "text-base font-bold text-[#00bbc9] mb-2" : "text-base font-semibold mb-2"
        }>
            About Us
        </NavLink></li>
        <li><NavLink to='/contact' className={({ isActive }) =>
            isActive ? "text-base font-bold text-[#00bbc9] mb-2" : "text-base font-semibold mb-2"
        }>
            Contact Us
        </NavLink></li>
    </>


    return (
        <div className="navbar py-4 bg-[#0B1635]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="rounded-full border-2 p-2 border-[#00bbc9] text-[#00bbc9] hover:text-white hover:bg-[#00bbc9]">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-36 pl-4">
                        {link}
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <Link to="/" className=''>
                    <img src={logo} alt="" className='h-10 w-fit' />
                </Link>
            </div>
            <div className="navbar-end">
                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="">
                            <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-28">
                            <li>
                            <button onClick={handelLogOut} className="text-base font-bold text-black hover:text-[#00bbc9] px-2">
                                Log Out
                            </button>
                            </li>
                        </ul>
                    </div> : <Link to='/login' className="text-base font-bold bg-none text-[#00bbc9] border-2 border-[#00bbc9] px-4 py-2 rounded-xl hover:text-white hover:bg-[#00bbc9]">
                        Login
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;