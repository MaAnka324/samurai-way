import React, {ChangeEvent, useState} from 'react';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {PostsType, ProfileType} from "../../redux/profile-reducer";
import userPhoto from '../../assets/images/UserIcon.png'
import {Redirect} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProfileStatusWithHooks from "../../../src/components/Profile/MyPosts/ProfileStatusWithHooks";
import {FormProfileDataType, ProfileReduxForm} from "./ProfileDataForm";
import EditIcon from '@mui/icons-material/Edit';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import {Button, IconButton} from "@mui/material";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (userId: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (data: FormProfileDataType) => void
}


const ProfileInfo = (props: ProfileInfoType) => {

    let [editMode, setEditMode] = useState<boolean>(false)

    if (!props.profile) {
        return <Box sx={{display: 'flex'}}>
            <CircularProgress/>
        </Box>
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    const onSubmit = (formData: FormProfileDataType) => {
        props.saveProfile(formData)
    }


    return (
        <div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos?.large ? props.profile.photos.large : userPhoto}
                />
                {/*{props.isOwner && <input type='file' onChange={mainPhotoSelected}/>}*/}
                {props.isOwner && <label>
                    <input type="file"
                           name='photo'
                           onChange={mainPhotoSelected}
                           style={{display: 'none'}}
                    />
                    <IconButton component="span">
                        <AddAPhotoIcon color="primary"/>
                    </IconButton>
                </label>
                }
            </div>
            <div className={s.descriptionBlock}>
                <ProfileStatusWithHooks isOwner={props.isOwner} status={props?.status} updateStatus={props?.updateStatus}/>
            </div>
            {editMode
                ? <div>
                    <ProfileReduxForm initialValues={props.profile} onSubmit={onSubmit}/>
                    <div className={s.button}>
                        <Button variant="outlined" startIcon={<ArrowBackIcon />}
                                onClick={() => {setEditMode(false)}}>
                            go to profile
                        </Button>
                    </div>

                    {/*<button onClick={() => {*/}
                    {/*    setEditMode(false)}}>go to profile</button>*/}
                </div>
                : <div>
                    <ProfileData profile={props.profile}
                                 status={props.status}
                                 updateStatus={props.updateStatus}
                                 isOwner={props.isOwner}
                                 goToEditMode={() => {
                                     setEditMode(true)
                                 }}/>
                </div>
            }
        </div>
    )
}


interface ProfilePropsTypeNew {
    profile: ProfileType | null,
    post: PostsType[]
    messageForNewPost: string
    setUsersProfile: (profile: ProfileType) => void
    isAuth: boolean
    status: string
    updateStatus: (userId: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
    saveProfile: (data: FormProfileDataType) => void
}


const Profile = (props: ProfilePropsTypeNew) => {

    if (!props.isAuth) return <Redirect to={'/login'}/>

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}
            />
            {/*<MyPostsContainer/>*/}
        </div>
    )
}


type ProfileDataType = {
    profile?: ProfileType | null
    status: string
    updateStatus: (userId: string) => void
    goToEditMode: () => void
    isOwner: boolean
}


const ProfileData = (props: ProfileDataType) => {
    return <div className={s.profileDataForm}>
        <div>
            <b>Name : </b> {props?.profile?.fullName}
        </div>
        <div>
            <b>Looking for a Job : </b> {props?.profile?.lookingForAJob ? "yes" : "no"}
        </div>
        <div>
            <b>My professional
                skills : </b> {props?.profile?.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "------"}
        </div>
        <div>
            <b>About me : </b>{props?.profile?.aboutMe}
        </div>
        <div>
            <b>Contacts </b>
            {props?.profile?.contacts && Object.keys(props?.profile?.contacts).map(key => {
                const contacts = props?.profile?.contacts! as ContactsType
                return (
                    <Contacts
                        key={key}
                        contactTitle={key}
                        contactValue={contacts[key as keyof ContactsType]}
                    />
                );
            })}
        </div>

        {props.isOwner && <div>
            {<Button variant="outlined" startIcon={<EditIcon />}
                     onClick={props.goToEditMode}>
                Edit
            </Button>}
        </div>

        }

    </div>
}

type ContactsType = {
    contactTitle: string
    contactValue?: string | null
}

const Contacts = (props: ContactsType) => {
    return (
        <div>
            <b>
                {props.contactTitle}
            </b>
            : {props?.contactValue !== null ? <a href={props?.contactValue} target='_blank'>{props?.contactValue}</a> : ''}
        </div>
    )
}

export default Profile