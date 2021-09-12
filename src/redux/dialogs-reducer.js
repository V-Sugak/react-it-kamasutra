const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 6,
                message: state.newMessageBody
            };
            let stateCopy = {
                ...state,
                messages: [...state.messages]
            }
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageBody = '';
            return stateCopy;
        }

        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
            let stateCopy = { ...state }
            return stateCopy;
        }

        default: return state;
    }
}

export const sendMessageAC = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodytAC = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;

