import { Navigate } from "react-router-dom";

function ProtectedRouteAuth({ element: Component, ...props }) {
  return (
    props.isLoggedIn ? <Navigate to='/' /> : <Component { ...props } />
  )
};

export default ProtectedRouteAuth;
