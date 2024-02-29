import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/valodators";
import style from '../common/FormsControls/FormControl.module.css'
import Button from "@mui/material/Button";

import TextField from "@mui/material/TextField";
import {RenderFieldProps} from "../../../src/components/Profile/ProfileDataForm";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
    captcha: string
}

const renderField: React.FC<RenderFieldProps> = ({input, label, type}) => (
    <div>
        <label>{label}</label>
        <div>
            <TextField {...input} type={type} variant="outlined" className={style.field}/>
        </div>
    </div>
);

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = ({handleSubmit, error}) => {
    const captchaUrl = useAppSelector(state => state.auth.captchaUrl)

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.loginForm}>
                <div>
                    <b>Email </b>
                    <Field name={'email'}
                           placeholder={'Email'}
                           component={renderField}
                           validate={[required]}
                    />
                </div>
                <div>
                    <b>Password </b>
                    <Field name={'password'}
                           placeholder={'Password'}
                           component={renderField}
                           type={'password'}
                           validate={[required]}
                    />
                </div>
                <div>
                    <b>Remember Me </b>
                    <Field name={'rememberMe'}
                           type={'checkbox'}
                           component={Input}
                    />
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
                <div className={style.buttonLogin}>
                    <Button type="submit" variant="outlined">Log In</Button>
                </div>
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

    const onSubmit = (formData: FormDataType) => {
        dispatch(loginTC(formData))
        console.log(formData)
    }

    if (isAuth) return <Redirect to={'/profile'}/>

    return (
        <div className={style.loginBlock}>
            <h1>LOGIN</h1>
            <p>*You can try the App through my account:</p>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;