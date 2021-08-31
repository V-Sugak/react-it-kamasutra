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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                massege: this._state.profilePage.newPostText,
                likeCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

window.store = store;


