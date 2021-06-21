import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Card ,Alert} from "react-bootstrap"
import { Link } from "react-router-dom"
import { addDataToFB } from '../../firebase/firebaseService';
import { UseAuth } from "../../contexts/AuthContext"
import { useSignUpForm } from '../../model/signup.model';
import Wrapper from "../Layout/wrapper";
const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useSignUpForm();
  const [errorMsg, setErrorMsg] = useState("")
  const History = useHistory();
  const auth = UseAuth();
  const onSubmit = async (data: any) => {
    console.log(JSON.stringify(data, null, 2));
    try {
      const { name, mobilenumber, email, password } = data;
      await auth?.signup(email, password)
      const userData = { name: name, mobilenumber: mobilenumber, email: email }
      await addDataToFB("demo-users", userData).then((resp) => {
        console.log("user creation sucessfull");
        History.push("/signIn")
        reset()
      }).catch((error) => {
        console.log("user creation error", error);
      })
    }
    catch (error) {
      setErrorMsg(error.message)
    }
  };


  return (
    <>
      <Wrapper>
        <Card>
          <Card.Body>
            <h2 className="text-center mb-4">SIGNUP</h2>
            {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  {...register("name")}
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.name?.message}</div>
              </div>
              <div className="form-group">
                <label>Mobile Number</label>
                <input
                  type="text"
                  {...register('mobilenumber')}
                  className={`form-control ${errors.mobilenumber ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.mobilenumber?.message}</div>
              </div>
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
                <label>Confirm Password</label>
                <input
                  type="password"
                  {...register('confirmPassword')}
                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''
                    }`}
                />
                <div className="invalid-feedback">
                  {errors.confirmPassword?.message}
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Register
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
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/signIn">Log In</Link>
        </div>
      </Wrapper>
    </>
  );
};

export default SignUp;
