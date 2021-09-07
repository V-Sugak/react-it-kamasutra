const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {

    switch (action.type) {

        case SEND_MESSAGE: let newMessage = {
            id: 6,
            message: state.newMessageBody
        };
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;

        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;

        default: return state;
    }
}

export const sendMessageAC = () => ({ type: SEND_MESSAGE })
export const updateNewMessageBodytAC = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
})

export default dialogsReducer;

