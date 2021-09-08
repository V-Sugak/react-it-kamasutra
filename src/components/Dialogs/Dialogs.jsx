import React from 'react';
import s from './Dialogs.module.css';
import { DialogsItems } from './DialogsItems/DialogsItem';
import { Message } from './Message/Message';



export const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(d => <DialogsItems name={d.name} id={d.id} />);

    let messageElements = props.state.messages.map(m => <Message message={m.message} />);

    let newMessageBody = props.state.newMessageBody;

    let onNewMessageBodyChange = (e) => {
        let body = e.target.value;
        props.onNewMessageBodyChange(body);
    }

    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>

            <div className={s.messages}>
                <div>{messageElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message' value={newMessageBody} onChange={onNewMessageBodyChange} ></textarea>
                    </div>
                    <div><button onClick={onSendMessageClick} >Send</button></div>
                </div>
            </div>
        </div>
    )
}
