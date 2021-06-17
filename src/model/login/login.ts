import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
export interface Login {
    email: string
    password: string;
}
export const login: { [P in keyof Login]: P } = {
    email: "email",
    password: "password",

};

export const LoginSchema: Yup.SchemaOf<Login> = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),

});
export const useLoginForm = () => {
    return useForm<Login>({ resolver: yupResolver(LoginSchema) });
};