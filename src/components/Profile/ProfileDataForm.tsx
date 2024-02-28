import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../../src/components/common/FormsControls/FormsControls";
import {required} from "../../../src/utils/validators/valodators";
import {ContactsType} from "../../../src/redux/profile-reducer";
import {useAppSelector} from "../../../src/redux/redux-store";
import style from "../../../src/components/common/FormsControls/FormControl.module.css";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export type FormProfileDataType = {
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    aboutMe: string;
    contacts?: ContactsType | null | undefined
};

interface RenderFieldProps {
    input: any;
    label: string;
    type: string;
}

const renderField: React.FC<RenderFieldProps> = ({input, label, type}) => (
    <div>
        <label>{label}</label>
        <div>
            <TextField {...input} type={type} variant="outlined"/>
        </div>
    </div>
);


export const ProfileDataForm: React.FC<InjectedFormProps<FormProfileDataType>> = (props) => {
    const {handleSubmit, error} = props;

    const profile = useAppSelector(state => state.profilePage.profile)

    return (
        <form onSubmit={handleSubmit}>
            <div className={style.forms}>
                <div className={style.form}>
                    <b>Name </b>
                    <Field
                        name={'fullName'}
                        placeholder={'fullName'}
                        defaultValue={profile?.fullName}
                        component={renderField}
                        validate={[required]}
                    />
                </div>
                <div className={style.form}>
                    <b>Looking for a Job </b>
                    <Field
                        name={'lookingForAJob'}
                        placeholder={'lookingForAJob'}
                        component={Input}
                        type='checkbox'
                    />
                </div>
                <div className={style.form}>
                    <b>My professional skills</b>
                    <Field
                        name={'lookingForAJobDescription'}
                        placeholder={'lookingForAJobDescription'}
                        component={renderField}

                    />
                </div>
                <div className={style.form}>
                    <b>About me</b>
                    <Field
                        name={'aboutMe'}
                        placeholder={'aboutMe'}
                        component={renderField}
                    />
                </div>
                <div className={style.form}>
                    <b>Contacts</b>
                    <div className={style.contacts}>
                        {profile?.contacts && Object.keys(profile.contacts).map(key => {
                            return (
                                <div className={style.contact} key={key}>
                                    {key}: <Field
                                    name={'contacts.' + key}
                                    placeholder={key}
                                    component={renderField}
                                />
                                </div>
                            );
                        })}
                    </div>
                </div>
                {error && <div className={style.formSummaryError}>
                    {error}
                </div>}
                <div className={style.buttonSubmit}>
                    <Button type="submit" color={"success"} variant="contained">Save</Button>
                </div>
            </div>
        </form>
    );
};

export const ProfileReduxForm = reduxForm<FormProfileDataType>({
    form: 'edit-profile',
})(ProfileDataForm);

