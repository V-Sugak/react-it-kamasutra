import React from 'react';
import s from './Dialogs.module.css';
import { DialogsItems } from './DialogsItems/DialogsItem';
import { Message } from './Message/Message';
import { updateNewMessageBodytAC, sendMessageAC } from '../../redux/dialogs-reducer';


export const Dialogs = (props) => {

    let dialogElements = props.state.dialogs.map(dialog => <DialogsItems name={dialog.name} id={dialog.id} />);

    let messageElements = props.state.messages.map(message => <Message message={message.message} />);

    let newMessageBody = props.state.newMessageBody;

    let onNewMessageBodyChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodytAC(body));
    }

    let onSendMessageClick = () => {
        props.dispatch(sendMessageAC());
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
