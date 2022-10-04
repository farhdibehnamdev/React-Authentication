import { Navigate, Outlet } from "react-router-dom";
import useUser from "../../hooks/useUser";
const PrivateRoute = function () {
  const auth = useUser();

  return auth ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoute;
