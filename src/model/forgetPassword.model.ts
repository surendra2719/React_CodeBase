import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
export interface forgetPassword { email: string }
export const ForgetPassword: { [P in keyof forgetPassword]: P } = { email: "email" };
export const forgetPasswordSchema = Yup.object().shape({
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
});
export const useForgetPasswordForm = () => {
    return useForm<forgetPassword>({ resolver: yupResolver(forgetPasswordSchema) });
};