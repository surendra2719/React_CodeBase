import {useState} from "react";
import { useHistory } from "react-router-dom";
import { Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UseAuth } from "../../contexts/AuthContext"
import { useForgetPasswordForm, } from "../../model/forgetPassword.model";
import Wrapper from "../Layout/wrapper";
const ForgetPassword = () => {
  const {  register, handleSubmit,reset, formState: { errors }} = useForgetPasswordForm()
  const History = useHistory();
  const auth = UseAuth();
  const [errorMsg, setErrorMsg] = useState("")
  const onSubmit = async (data: any) => {
    const { email }=data;
    try{
      await auth?.resetPassword(email)
      History.push("/SignIn")
    }
    catch(error){
      console.log("login error",)
      setErrorMsg("Updating profile failed please try again later")
    }
  };
  return (
    <>
 <Wrapper>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">FORGET PASSWORD </h2>
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
              <button type="submit" className="btn btn-primary">
                Update
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
     
        </Card.Body>
      </Card>

      </Wrapper>
    </>
  );
};
export default ForgetPassword;
