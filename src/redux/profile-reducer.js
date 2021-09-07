const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        { id: 1, massege: "Hi, how are you?", likeCount: 15 },
        { id: 1, massege: "It's my first post.", likeCount: 20 }
    ],
    newPostText: 'it-kamasutra.com'
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: let newPost = {
            id: 5,
            massege: state.newPostText,
            likeCount: 0
        };
            state.posts.push(newPost);
            state.newPostText = '';
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state

        default: return state
    }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer;
