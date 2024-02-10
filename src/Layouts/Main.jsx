import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Main = () => {
    return (
        <div className="bg-[#0B1635] min-h-screen">
            <div className='max-w-7xl mx-auto px-2 md:px-3 lg:px-6'>
                <Navbar />
                <hr />
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Main;