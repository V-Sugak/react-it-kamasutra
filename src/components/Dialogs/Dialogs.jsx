import React from 'react';
import s from './Dialogs.module.css';
import { DialogsItems } from './DialogsItems/DialogsItem';
import { Message } from './Message/Message'


export const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Victor" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Tanya" }
    ]

    let dialogElements = dialogsData.map(dialog => <DialogsItems name={dialog.name} id={dialog.id} />);

    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" }
    ]

    let messageElements = messagesData.map(message => <Message message={message.message} />);

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
