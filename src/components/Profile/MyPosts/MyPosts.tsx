import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {PostsType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/valodators";
import {Textarea} from "../../common/FormsControls/FormsControls";


type MyPostsType = {
    addPost: (newPost: string) => void
    posts: PostsType[]
    onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
    messageForNewPost: string
}

type PostFormDataType = {
    post: string
}

const  maxLength10 =  maxLength(10)

const MyPostsForm: React.FC<InjectedFormProps<PostFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field name={'post'}
                   component={Textarea}
                   validate={[required, maxLength10]}
                   placeholder={'Post message'}
            ></Field>
            <button>Add post</button>
        </form>
    )
}


const PostReduxForm = reduxForm<PostFormDataType>({
    form: 'post'
})(MyPostsForm)


const MyPosts = React.memo( (props: MyPostsType) => {
    const onSubmit = (formData: PostFormDataType) => {
        props.addPost(formData.post)
    }

    let postElement = props.posts.map(p => <Post
        key={p.id}
        message={p.message}
        likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={onSubmit}/>
            <div className={s.posts}>
                {postElement}
            </div>
        </div>
    )
})

export default MyPosts