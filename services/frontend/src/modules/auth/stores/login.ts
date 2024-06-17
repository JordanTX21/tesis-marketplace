import { defineStore } from 'pinia';
import { useForm } from 'vee-validate';
import * as Yup from 'yup';
import { ref } from 'vue'
import Request from '@/utils/request';
import { useRouter } from 'vue-router';

const request = new Request();

const loginSchema = Yup.object({
    email: Yup.string().email().required(),
    password: Yup.string().min(6).required(),
});

export const useLoginStore = defineStore('login', () => {
    const { errors, defineField, handleSubmit, setErrors } = useForm({
        validationSchema: loginSchema,
    });
    const [email, emailProps] = defineField('email');
    const [password, passwordProps] = defineField('password');
    const isLoggedIn = ref<Boolean>(false)
    const disabled = ref<Boolean>(false);
    const router = useRouter();

    const signup = handleSubmit(async (values:any) => {
        disabled.value = true
        const response = await request.post("user/login",values)
        if(!response.success){
            if (response.data) {
                // Set errors for each field based on response
                if (response.data.email) {
                    setErrors({ email: response.message });
                }
                if (response.data.password) {
                    setErrors({ password: response.message });
                }
            }
            disabled.value = false
            return false;
        }
        isLoggedIn.value = true;
        await router.push({name:'home_home'})
        disabled.value = false
    });
    
    const logout = () => {
        isLoggedIn.value = false;
    }

    return {
        errors,
        email,
        emailProps,
        password,
        passwordProps,
        signup,
        logout,
        isLoggedIn,
        disabled
    }
})