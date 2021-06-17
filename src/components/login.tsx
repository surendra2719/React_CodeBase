import * as React from "react";
import { useHistory } from "react-router-dom";
import { singInUserAuth } from '../firebase/firebase_authService';
import { useLoginForm, } from "../model/login/login";

const  Login:React.FC=()=> {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useLoginForm()
  const History = useHistory();
  const onSubmit = (data :any) => {
    let {email,password}=data;
    singInUserAuth(email,password).then((user)=>{
      console.log("login auth sucessfull");
      console.log(JSON.stringify(data, null, 2));
      History.push("/dashboard")
  }).catch((error)=>{
    console.log("login auth error",error);
  })
  };
  return (
    <div className="register-form">
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
            
            onClick={()=>reset()}
            className="btn btn-warning float-right"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
export default Login;
