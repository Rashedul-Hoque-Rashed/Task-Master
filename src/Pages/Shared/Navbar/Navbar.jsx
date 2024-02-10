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
            isActive ? "text-base font-bold text-[#1F4B3F]" : "text-base font-semibold"
        }>
            Home
        </NavLink></li>
    </>


    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-11 w-11 text-[#1F4B3F]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h7" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <img src={user?.photoURL} alt="" className="w-11 h-11 rounded-full" />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                            <button onClick={handelLogOut} className="text-base font-bold text-[#1F4B3F]">
                                Log Out
                            </button>
                            </li>
                        </ul>
                    </div> : <Link to='/login' className="text-base font-bold bg-white text-[#1F4B3F] border-2 border-[#1f4b3f] px-4 py-1 rounded-xl hover:text-white hover:bg-[#1f4b3f]">
                        Login
                    </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;