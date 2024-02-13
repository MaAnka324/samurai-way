import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/valodators";
import style from '../common/FormsControls/FormControl.module.css'


export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const captchaUrl = useAppSelector(state => state.auth.captchaUrl)

    // if(isAuth) return <Redirect to={'/profile/:userId?'}/>
    // debugger


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field name={'email'}
                       placeholder={'Email'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field name={'password'}
                       placeholder={'Password'}
                       component={Input}
                       type={'password'}
                       validate={[required]}
                />
            </div>
            <div>
                <Field name={'rememberMe'}
                       type={'checkbox'}
                       component={Input}/> remember me
            </div>

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && <div>
                <Field name={'captcha'}
                       placeholder={'Captcha'}
                       component={Input}
                       validate={[required]}
                />
            </div>}

            {error && <div className={style.formSummaryError}>
                ERROR
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};


const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login',
    initialValues: {
        email: 'matviychuk.anna324@gmail.com',
        password: '123456789Anna',
        rememberMe: false
    }
})(LoginForm)


const Login = () => {
    const dispatch = useAppDispatch()
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const captchaUrl = useAppSelector(state => state.auth.captchaUrl)

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginTC(formData))
        console.log(formData)
    }

    if(isAuth) return <Redirect to={'/profile'}/>

    return (
        <div>
            <h1>LOGIN</h1>
            <p>*You can try the App through my account:</p>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    );
};

export default Login;