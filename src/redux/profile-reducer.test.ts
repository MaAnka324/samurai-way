import profileReducer, {addPostAC, deletePostAC, PostsType} from "../../src/redux/profile-reducer";

let state = {
    messageForNewPost: '',
    post: [
        {id: 1, message: 'Hello', likesCount: 12},
        {id: 2, message: 'How are you?', likesCount: 11},
    ] as Array<PostsType>,
    profile: null,
    status: ''
}

test('message of new post should be correct', () => {
    let action = addPostAC('it-kamasutra')

    let newState = profileReducer(state, action)

    expect(newState.post.length).toBe(3)
})

test('new post should be added', () => {
    let action = addPostAC('it-kamasutra')

    let newState = profileReducer(state, action)

    expect(newState.post[0].message).toBe('it-kamasutra')
})

test('after deleting should be decrement ', () => {
    let action = deletePostAC(1)

    let newState = profileReducer(state, action)

    expect(newState.post.length).toBe(1)
    expect(newState.post[0].id).toBe(2)
})
