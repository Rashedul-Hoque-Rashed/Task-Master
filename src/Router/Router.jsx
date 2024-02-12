import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Dashboard from "../Layouts/Dashboard";
import PrivateRouter from "./PrivateRouter";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import TaskManagement from "../Pages/TaskManagement/TaskManagement";
import UpdateTask from "../Components/UpdateTask";
import Counter from "../Pages/Counter/Counter";
import Error from "../Pages/Error/Error";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRouter><Dashboard /></PrivateRouter>,
        errorElement: <Error />,
        children: [
            {
                path: "/dashboard/taskManage",
                element: <TaskManagement />
            },
            {
                path: "/dashboard/update/:id",
                element: <UpdateTask />
            },
            {
                path: "/dashboard/counter",
                element: <Counter />
            },
        ]
    }
]);


export default router;