import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
// import Dashboard from "./components/dashboard";
import Layout from "./components/Layout/index";
import Menu from "../src/components/pages/Menu";
import Profile from "./components/pages/profile";
const App = () => {
  return (
    <BrowserRouter>
      <Route>
        <Switch>
          <Route path="/signIn" component={Login} />
          <Route path="/signUp" component={SignUp} />
          <Layout>
            <Route path="/Menu" component={Menu} />
            <Route path="/Profile" component={Profile} />
          </Layout>
        </Switch>
      </Route>
    </BrowserRouter>
  )
};
export default App;
