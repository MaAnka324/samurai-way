import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {useAppDispatch, useAppSelector} from "../../redux/redux-store";
import {loginTC} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/valodators";


export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}



const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)

    if(isLoggedIn) return <Redirect to={'/profile/:userId?'}/>
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'login'}
                       placeholder={'Login'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field name={'password'}
                       placeholder={'Password'}
                       component={Input}
                       validate={[required]}
                />
            </div>
            <div>
                <Field name={'rememberMe'}
                       type={'checkbox'}
                       component={Input}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    );
};


const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)


const Login = () => {
    const dispatch = useAppDispatch()
    const onSubmit = (formData: FormDataType) => {
        dispatch(loginTC(formData))
        console.log(formData)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

export default Login;