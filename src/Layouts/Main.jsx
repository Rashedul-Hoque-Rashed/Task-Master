import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";


const Main = () => {
    return (
        <div className='max-w-7xl mx-auto px-2 md:px-3 lg:px-6'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;