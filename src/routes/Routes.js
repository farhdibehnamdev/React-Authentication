import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "../components/dashboard/Dashboard";
import SignIn from "../components/signin/SignIn";
const Routes = function () {
  return (
    <Router>
      <Route path="/">
        <Dashboard />
      </Route>
      <Route path="/login">
        <SignIn />
      </Route>
    </Router>
  );
};
export default Routes;
