import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/login";
import SignUp from "./components/signup";
import Dashboard from "./components/dashboard";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signIn">
          <Login />
        </Route>
        <Route path="/signUp">
          <SignUp />
        </Route>
        <Route path="/dashBoard" component={Dashboard} >
        </Route>
      </Switch>
    </Router>
  )
};
export default App;
