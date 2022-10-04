import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SignIn from "../components/signin/SignIn";
import SignUp from "../components/signup/SignUp";
import NotFound from "../components/notFound/NotFound";
import PrivateRoute from "./privateRoute/PrivateRoute";
import ProfilePage from "../pages/ProfilePage";
import VerifyEmailPage from "../pages/VerifyEmailPage";

const AppRoutes = function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
