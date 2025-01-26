

// import { Navigate, useLocation } from 'react-router-dom';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Provider/AuthProvider';
import LoadingSpinner from '../components/LoadingSpinner';
// import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }

    if(user){
        return children
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;