import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

import Profile from "../components/profile/Profile";
import SignIn from "../components/signin/SignIn";
import SignUp from "../components/signup/SignUp";
import NotFound from "../components/notFound/NotFound";

const AppRoutes = function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
