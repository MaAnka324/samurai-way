import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../../src/components/common/FormsControls/FormsControls";
import {required} from "../../../src/utils/validators/valodators";
import {ContactsType, ProfileType} from "../../../src/redux/profile-reducer";
import {useAppSelector} from "../../../src/redux/redux-store";
import style from "../../../src/components/common/FormsControls/FormControl.module.css";


export type FormProfileDataType = {
    fullName: string;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    aboutMe: string;
    contacts?: ContactsType | null | undefined
};

export const ProfileDataForm: React.FC<InjectedFormProps<FormProfileDataType>> = (props) => {
    const {handleSubmit, error} = props;

    const profile = useAppSelector(state => state.profilePage.profile)

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <b>Name : </b>
                <Field
                    name={'fullName'}
                    placeholder={'fullName'}
                    component={Input}
                    validate={[required]}
                />
            </div>
            <div>
                <b>Looking for a Job :</b>
                <Field
                    name={'lookingForAJob'}
                    placeholder={'lookingForAJob'}
                    component={Input}
                    type='checkbox'
                />
            </div>
            <div>
                <b>My professional skills:</b>
                <Field
                    name={'lookingForAJobDescription'}
                    placeholder={'lookingForAJobDescription'}
                    component={Input}
                />
            </div>
            <div>
                <b>About me</b>
                <Field
                    name={'aboutMe'}
                    placeholder={'aboutMe'}
                    component={Input}
                />
            </div>
            <div>
                <b>Contacts </b>
                {profile?.contacts && Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key}>
                            {key}: <Field
                            name={'contacts.' + key}
                            placeholder={key}
                            component={Input}
                        />
                        </div>
                    );
                })}
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>save</button>
            </div>
        </form>
    );
};

export const ProfileReduxForm = reduxForm<FormProfileDataType>({
    form: 'edit-profile',
})(ProfileDataForm);

