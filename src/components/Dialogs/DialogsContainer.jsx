import React from 'react';
import { updateNewMessageBodytAC, sendMessageAC } from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
    return {
        state: state.dialogsPage
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        onNewMessageBodyChange: (body) => {
            dispatch(updateNewMessageBodytAC(body));
        },
        onSendMessageClick: () => {
            dispatch(sendMessageAC());
        }

    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;