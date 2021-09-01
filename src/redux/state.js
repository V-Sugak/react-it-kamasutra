const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, massege: "Hi, how are you?", likeCount: 15 },
                { id: 1, massege: "It's my first post.", likeCount: 20 }
            ],
            newPostText: 'it-kamasutra.com'

        },
        dialogsPage: {
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How is your it-kamasutra?" },
                { id: 3, message: "Yo" },
                { id: 4, message: "Yo" },
                { id: 5, message: "Yo" }
            ],
            dialogs: [
                { id: 1, name: "Dimych" },
                { id: 2, name: "Sasha" },
                { id: 3, name: "Victor" },
                { id: 4, name: "Sveta" },
                { id: 5, name: "Tanya" }
            ],

            newMessageBody: ''
        },
        sideBar: {},

    },
    _callSubscriber() {
        console.log('state changed');
    },


    getState() {
        return this._state
    },
    subscribe(observe) {
        this._callSubscriber = observe;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                massege: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
        else if (action.type === SEND_MESSAGE){
            let newMessage = {
                 id: 6,
                 message: this._state.dialogsPage.newMessageBody
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostAC = () => ({ type: ADD_POST })
export const updateNewPostTextAC = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})
export const sendMessageAC = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodytAC = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})


window.store = store;


