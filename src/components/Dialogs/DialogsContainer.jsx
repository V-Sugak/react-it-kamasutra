import React from 'react';
import { updateNewMessageBodytAC, sendMessageAC } from '../../redux/dialogs-reducer';
import { Dialogs } from './Dialogs';
import StoreContext from '../../StoreContext'; 


export const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState().dialogsPage;

                let onNewMessageBodyChange = (body) => {
                    store.dispatch(updateNewMessageBodytAC(body));
                }

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageAC());
                }

                return (
                    < Dialogs state={state}
                        onNewMessageBodyChange={onNewMessageBodyChange}
                        onSendMessageClick={onSendMessageClick} />
                )
            }}
        </StoreContext.Consumer>)
}