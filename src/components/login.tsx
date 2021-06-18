import {useState} from "react";
import { useHistory } from "react-router-dom";
import { Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UseAuth } from "../contexts/AuthContext"
import { useLoginForm, } from "../model/login/login";
import Wrapper from "./Layout/wrapper";
const Login = () => {
  const {  register, handleSubmit,reset, formState: { errors }} = useLoginForm()
  const History = useHistory();
  const auth = UseAuth();
  const [errorMsg, setErrorMsg] = useState("")
  const onSubmit = async (data: any) => {
    try{
    let { email, password } = data;
    await auth?.login(email, password)
      History.push("/dashboard")
    }
    catch(error){
      console.log("login error",)
      setErrorMsg(error.message)
    }
  };
  return (
    <>
 <Wrapper>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">LOGIN </h2>
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                {...register('password')}
                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.password?.message}</div>
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <button
                type="button"

                onClick={() => reset()}
                className="btn btn-warning float-right"
              >
                Reset
              </button>
            </div>
          </form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>

      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </Wrapper>
    </>
  );
};
export default Login;
