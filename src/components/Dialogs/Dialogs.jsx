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
    return (
        <div className={s.dialogs} >
            <div className={s.dialogsItems}>

                <DialogsItems name="Dimych" id="1" />
                <DialogsItems name="Sasha" id="2" />
                <DialogsItems name="Victor" id="3" />
                <DialogsItems name="Sveta" id="4" />
                <DialogsItems name="Tanya" id="5" />

            </div>
            <div className={s.messages}>

                <Message message="Hi" />
                <Message message="How is your it-kamasutra?" />
                <Message message="Yo" />
                <Message message="Yo" />
                <Message message="Yo" />

            </div>
        </div>
    )
}
