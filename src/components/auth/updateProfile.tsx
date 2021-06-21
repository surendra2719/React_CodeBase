import {useState} from "react";
import { useHistory } from "react-router-dom";
import { Card, Alert } from "react-bootstrap"
import { Link } from "react-router-dom"
import { UseAuth } from "../../contexts/AuthContext"
import { useUpdateProfileForm, } from "../../model/updateProfile.model";
import Wrapper from "../Layout/wrapper";
const UpdateProfile = () => {
  const {  register, handleSubmit,reset, formState: { errors }} = useUpdateProfileForm()
  const History = useHistory();
  const auth = UseAuth();
  const [errorMsg, setErrorMsg] = useState("")
  const onSubmit = async (data: any) => {
    const { confirmPassword }=data;
    try{
      await auth?.updatePassword(confirmPassword)
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
          <h2 className="text-center mb-4">UPDATE PASSWORD </h2>
          {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
          <form onSubmit={handleSubmit(onSubmit)}>
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
              <label> Confirm Password</label>
              <input
                type="password"
                {...register('confirmPassword')}
                className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
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
export default UpdateProfile;
