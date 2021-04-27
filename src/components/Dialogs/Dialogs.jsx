import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from "react-router-dom";

const DialogsItems = (props) => {
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={'/dialogs/' + props.id} > {props.name} </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}> {props.message} </div>
    )
}

export const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Sasha" },
        { id: 3, name: "Victor" },
        { id: 4, name: "Sveta" },
        { id: 5, name: "Tanya" }
    ]

    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your it-kamasutra?" },
        { id: 3, message: "Yo" },
        { id: 4, message: "Yo" },
        { id: 5, message: "Yo" }
    ]

    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>
                <DialogsItems name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogsItems name={dialogsData[1].name} id={dialogsData[1].id} />
            </div>

            <div className={s.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}
