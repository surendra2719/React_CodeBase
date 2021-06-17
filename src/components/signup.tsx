import { useHistory } from "react-router-dom";
import { addDataToFB } from '../firebase/firebaseService';
import { createUserAuth } from '../firebase/firebase_authService';
import { useSignUpForm } from '../model/signup/signup';
function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useSignUpForm();
    const History = useHistory();
  const onSubmit =( data:any )=> {
    console.log(JSON.stringify(data, null, 2));
    let { email, password } = data;
    createUserAuth(email, password).then((uesr) => {
      console.log("create auth sucessfull");
      addDataToFB ("demo-users",data).then((resp) => {
        console.log("user creation sucessfull");
        History.push("/signIn")
        reset()
      }).catch((error) => {
        console.log("user creation error",error);

      })
    }).catch((error) => {
      console.log("user auth error",error);

    })
  };


  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            {...register("firstname")}
            className={`form-control ${errors.firstname ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.firstname?.message}</div>
        </div>

        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            {...register('lastname')}
            className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
          />
          <div className="invalid-feedback">{errors.lastname?.message}</div>
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

export default SignUp;
