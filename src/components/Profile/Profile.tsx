import React, {ChangeEvent} from 'react';
import s from './Profile.module.css'
import MyPostsContainer from "./MyPosts/Post/MyPostsContainer";
import {PostsType, ProfileType} from "../../redux/profile-reducer";
import userPhoto from '../../assets/images/UserIcon.png'
import {Redirect} from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ProfileStatusWithHooks from "../../../src/components/Profile/MyPosts/ProfileStatusWithHooks";

type ProfileInfoType = {
    profile: ProfileType | null
    status: string
    updateStatus: (userId: string) => void
    isOwner: boolean
    savePhoto: (file: File) => void
}


const ProfileInfo = (props: ProfileInfoType) => {
    if (!props.profile) {
        return <Box sx={{display: 'flex'}}>
            <CircularProgress/>
        </Box>
        // return <div>Preloader</div>
    }

    const mainPhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }


    return (
        <div>
            {/*<div>*/}
            {/*    <img*/}
            {/*        src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a9e3440d-0f91-47a7-82c9-7c72df86c43d/ddzhn9j-59f0da47-6ed4-4e34-b732-aec2d19513d0.png/v1/fill/w_598,h_350,q_70,strp/harry_potter_and_the_chamber_of_secrets_fanart_07_by_vladislavpantic_ddzhn9j-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjAwIiwicGF0aCI6IlwvZlwvYTllMzQ0MGQtMGY5MS00N2E3LTgyYzktN2M3MmRmODZjNDNkXC9kZHpobjlqLTU5ZjBkYTQ3LTZlZDQtNGUzNC1iNzMyLWFlYzJkMTk1MTNkMC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.Y9jlhivjYT4XS4LVTbDlVe2ipynHrHPquQ1WsaRE_8s'/>*/}
            {/*</div>*/}
            <div>
                <b>Name : </b> {props.profile.fullName}
            </div>
            <div className={s.descriptionBlock}>
                <img
                    src={props.profile.photos?.large ? props.profile.photos.large : userPhoto}
                />
                {props.isOwner && <input type='file' onChange={mainPhotoSelected}/>}
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
            <div>
                <b>Looking for a Job :</b> {props.profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                <b>My professional
                    skills:</b> {props.profile.lookingForAJobDescription ? props.profile.lookingForAJobDescription : "------"}
            </div>
            <div>
                <b>About me </b>{props.profile.aboutMe}
            </div>
            <div>
                <b>Contacts </b>{Object.keys(props.profile.contacts).map(key => {
                debugger
                // console.log(props.profile?.contacts[key])
                return <Contacts
                    key={key}
                    contactTitle={key}
                    // contactValue={props.profile.contacts[key] }
                />
            })}
            </div>
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
            />
            <MyPostsContainer/>
        </div>
    )
}

type ContactsType = {
    contactTitle: string
    contactValue?: string | null
}

const ProfileDataForm = (props: {profile: ProfileType | null}) => {

}

const Contacts = (props: ContactsType) => {
    return (
        <div>
            <b>
                {props.contactTitle}
            </b>
            : {props.contactValue}
        </div>
    )
}

export default Profile