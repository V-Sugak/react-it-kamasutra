let renderEntireTree = () => {
console.log('hello');
};

export let state = {
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

}

export const addPost = () => {
    let newPost = {
        id: 5,
        massege: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText=newText;
    renderEntireTree(state);
}

export const subscribe = (observe) => {
    renderEntireTree = observe;
}