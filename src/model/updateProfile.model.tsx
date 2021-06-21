import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
export interface updateProfile {
    password: string;
    confirmPassword: string
}
export const UpdateProfile: { [P in keyof updateProfile]: P } = {
    password: "password",
    confirmPassword: "confirmPassword"
};
export const updateProfileSchema = Yup.object().shape({
    password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
});
export const useUpdateProfileForm = () => {
    return useForm<updateProfile>({ resolver: yupResolver(updateProfileSchema) });
};