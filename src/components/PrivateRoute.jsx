import { selectIsLoggedIn, selectIsRefreshing } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";


 const PrivateRoute = ({ component: Component, redirectTo ="/login"}) => {
   const isLoggedIn = useSelector(selectIsLoggedIn);
   const isRefreshing = useSelector(selectIsRefreshing);

  return !isRefreshing &&  isLoggedIn ? <Component /> : <Navigate to={redirectTo} /> ;
};

export default PrivateRoute;