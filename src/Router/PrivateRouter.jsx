import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRouter = ({ children }) => {

    const { user, isLoading } = useContext(AuthContext);
    const location = useLocation();


    if(isLoading){
        return (
            <div className="text-center my-96">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children;
    }
    else {
        return (
            <Navigate state={location.pathname} to="/login"></Navigate>
        )
    }


};

PrivateRouter.propTypes = {
    children: PropTypes.node
}


export default PrivateRouter;