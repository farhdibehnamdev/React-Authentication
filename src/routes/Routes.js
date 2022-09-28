import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import SignIn from "../components/signin/SignIn";
const AppRoutes = function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<SignIn />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
