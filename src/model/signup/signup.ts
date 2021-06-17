import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { phoneRegExp } from './../../config/regex';
export interface SignUp {
    firstname: string;
    lastname: string;
    mobilenumber: string;
    email: string
    password: string;
    confirmPassword: string
}
export const signUp: { [P in keyof SignUp]: P } = {
    firstname: "firstname",
    lastname: "lastname",
    mobilenumber: "mobilenumber",
    email: "email",
    password: "password",
    confirmPassword: "confirmPassword"
};

export const signUpSchema = Yup.object().shape({
    firstname: Yup.string().required('First name is required'),
    lastname: Yup.string().required('Last name is required'),
    mobilenumber: Yup.string().required("Mobile number is required").matches(phoneRegExp, 'Phone number is not valid'),
    // username: Yup.string()
    //   .required('Username is required')
    //   .min(6, 'Username must be at least 6 characters')
    //   .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
});
export const useSignUpForm = () => {
    return useForm<SignUp>({ resolver: yupResolver(signUpSchema) });
};