import { Navigate, Route, Outlet } from "react-router-dom";
const PrivateRoute = function () {
  const auth = "null";

  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
