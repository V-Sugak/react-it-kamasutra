import React from 'react';
import s from './Dialogs.module.css';
import { DialogsItems } from './DialogsItems/DialogsItem';
import { Message } from './Message/Message'


export const Dialogs = (props) => {

    let dialogElements = props.dialogsData.map(dialog => <DialogsItems name={dialog.name} id={dialog.id} />);

    let messageElements = props.messagesData.map(message => <Message message={message.message} />);

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    )
}
