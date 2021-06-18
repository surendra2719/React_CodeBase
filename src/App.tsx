import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext"
import PrivateRoute from "./components/privateRoute";
import Login from "./components/login";
import SignUp from "./components/signup";
import Dashboard from "./components/dashboard";
import Layout from "./components/Layout/index";
import Menu from "../src/components/pages/Menu";
import Profile from "./components/pages/profile";

 interface RouteProps {
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
}
const App:React.FC<RouteProps> = () => {
  return (
    <BrowserRouter>
      <Route>
        <AuthProvider>
        <Switch>
        <Route path="/" exact  component={Login}></Route>
          <Route path="/signIn" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Layout>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute path="/Menu" component={Menu} />
            <PrivateRoute path="/Profile" component={Profile} />
          </Layout>
        </Switch>
        </AuthProvider>
      </Route>
    </BrowserRouter>
  )
};
export default App;
