import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"
import loginImg from "../../assets/Images/login.png"
import Swal from "sweetalert2";
import { useContext } from 'react';
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {

    const { login, googleLogin } = useContext(AuthContext);
    const location = useLocation();
    const Navigate = useNavigate();

    const handelLogin = (e) => {
        e.preventDefault();
        const from = e.target;
        const email = from.email.value;
        const password = from.password.value;

        login(email, password)
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate(location?.state ? location.state : "/");

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

    const handelGoogle = () => {
        googleLogin()
            .then(res => {
                console.log(res.user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successful',
                    showConfirmButton: false,
                    timer: 2500
                })
                Navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                Swal.fire({
                    icon: 'error',
                    title: `${err.message}`,
                    showConfirmButton: false,
                    timer: 2500
                });
            });
    }

    return (
        <div className="hero container mx-auto px-2 md:px-6 py-10 ">
            <div className="hero-content flex-col md:flex-row">
                <div className="text-center flex-1 lg:text-left">
                    <img src={loginImg} alt="" />
                </div>
                <div className="card w-full shadow-2xl md:w-5/12 bg-base-100 p-6 sm:p-8">
                    <h2 className="text-2xl font-bold mb-6">Welcome back</h2>
                    <form onSubmit={handelLogin} className="space-y-4 md:space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Your Email" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label htmlFor="remember" className="text-gray-500">Remember me</label>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn normal-case w-full bg-[#00bbc9] text-white hover:bg-[#009aa0]">Login</button>

                    </form>
                    <div className="divider">OR</div>
                    <div className="space-y-4 md:space-y-6">
                        <button onClick={handelGoogle} className="btn normal-case w-full text-black"> <FcGoogle className="w-6 h-6" /> Login with Google</button>
                        <p className="text-sm font-light text-gray-500">
                            Don’t have an account yet? <NavLink to="/register" href="#" className="font-medium text-[#00bbc9] hover:underline">Register</NavLink>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
