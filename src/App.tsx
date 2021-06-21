import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext"
import PrivateRoute from "./components/auth/privateRoute";
import Login from "./components/auth/login";
import SignUp from "./components/auth/signup";
import Menu from "../src/components/pages/Menu";
import Profile from "./components/pages/profile";
import Dashboard from "./components/auth/dashboard";
import UpdateProfile from "./components/auth/updateProfile";
import ForgetPassword from "./components/auth/forgetPassword";
import PageNotFound from "./components/auth/pageNotFound";
import './App.css';
interface RouteProps {
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
}
const App: React.FC<RouteProps> = () => {
  return (
    <Router>
      <Route>
        <AuthProvider>
          <Switch>
            <Route path="/" exact component={Login}></Route>
            <Route path="/signIn" component={Login} />
            <Route path="/signUp" component={SignUp} />
            <PrivateRoute path="/updateProfile" component={UpdateProfile} />
            <Route path="/forgot-password" component={ForgetPassword} />
            <PrivateRoute path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/Menu" component={Menu} />
            <PrivateRoute path="/Profile" component={Profile} />
            <Route component={PageNotFound} />
          </Switch>
        </AuthProvider>
      </Route>
    </Router>
  )
};
export default App;
