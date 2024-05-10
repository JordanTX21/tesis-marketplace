import { defineStore } from 'pinia';
import { useForm } from 'vee-validate';
import * as Yup from 'yup';

const loginSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
});

export const useLoginStore = defineStore('login', () => {
    const { errors, defineField, handleSubmit } = useForm({
        validationSchema: loginSchema,
    });
    const [email, emailProps] = defineField('email');
    const [password, passwordProps] = defineField('password');

    const signup = handleSubmit((values: {}) => {
        // send values to API
        console.log('Submit', JSON.stringify(values, null, 2));
    });
    return {
        errors,
        email,
        emailProps,
        password,
        passwordProps,
        signup,
    }
})