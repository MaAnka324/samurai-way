import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../../../src/components/common/FormsControls/FormsControls";
import {required} from "../../../src/utils/validators/valodators";



export type FormProfileDataType = {
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
}

export const ProfileDataForm: React.FC<InjectedFormProps<FormProfileDataType>> = ({handleSubmit, error}) => {
    return (
    <form onSubmit={handleSubmit}>
        <div>
            <b>Name : </b> <Field name={'fullName'}
                                  placeholder={'fullName'}
                                  component={Input}
                                  validate={[required]}
        />
        </div>
        <div>
            <b>Looking for a Job :</b> <Field name={'lookingForAJob'}
                                              placeholder={'lookingForAJob'}
                                              component={Input}
                                              type='checkbox'
        />
        </div>
        <div>
            <b>My professional
                skills:</b> <Field name={'lookingForAJobDescription'}
                                   placeholder={'lookingForAJobDescription'}
                                   component={Input}
        />
        </div>
        <div>
            <b>About me </b><Field name={'aboutMe'}
                                   placeholder={'aboutMe'}
                                   component={Input}
                                   />
        </div>
        {/*<div>*/}
        {/*    <b>Contacts </b>*/}
        {/*    {props?.profile?.contacts && Object.keys(props.profile.contacts).map(key => {*/}
        {/*        return (*/}
        {/*            <Contacts*/}
        {/*                key={key}*/}
        {/*                contactTitle={key}*/}
        {/*                // contactValue={props.profile.contacts[key]}*/}
        {/*            />*/}
        {/*        );*/}
        {/*    })}*/}
        {/*</div>*/}
        <div>
            <button>save</button>
        </div>
    </form>
    )
}


export const ProfileReduxForm = reduxForm<FormProfileDataType>({
    form: 'edit-profile'
})(ProfileDataForm)



// const ProfileForm = () => {
//     const dispatch = useAppDispatch()
//
//     const onSubmit = (formData: FormProfileDataType) => {
//         dispatch(saveProfileTC(formData))
//     }
//
//
//     return (
//         <div>
//             <h1>Profile </h1>
//             <ProfileReduxForm onSubmit={onSubmit}/>
//         </div>
//     );
// };
//
//
// export default ProfileForm