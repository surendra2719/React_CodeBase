import React from "react"
import { Route, Redirect } from "react-router-dom"
import { UseAuth } from "../../contexts/AuthContext"
interface RouteProps {
  path?: string | string[];
  exact?: boolean;
  sensitive?: boolean;
  strict?: boolean;
  component: any;
}
const PrivateRoute: React.FC<RouteProps> = ({ component: Component, ...rest }) => {
  const auth = UseAuth();
  return (
    <Route
      {...rest}
      render={props => {
        return auth?.currentUser ? <Component {...props} /> : <Redirect to="/signIn" />
      }}
    ></Route>
  )
}
export default PrivateRoute;