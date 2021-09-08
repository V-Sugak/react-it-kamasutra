import React from 'react';
import { updateNewMessageBodytAC, sendMessageAC } from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';


export const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;

    let onNewMessageBodyChange = (body) => {
        props.store.dispatch(updateNewMessageBodytAC(body));
    }

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageAC());
    }

   return <Dialogs state={state} onNewMessageBodyChange={onNewMessageBodyChange} onSendMessageClick={onSendMessageClick} />
}
