import React from 'react';
import s from './Users.module.css'
import axios from "axios";
import icon from './../../assets/images/icon.png'


export const Users = (props) => {
    const setUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                props.setUsers(res.data.items)
            })
        }
    }
    debugger
    console.log(props.users)
    return <div>
        <button onClick={setUsers}>Set Users</button>

        {props.users.map(u => {
            return <div key={u.id}>
        <span>
         <div>
       <div><img src={u.photos.small !==null ? u.photos.small :  icon} className={s.photo}/></div>
         </div>
            {/*  <button onClick={() => props.isFollowed(u.id)}>{u.followed ? 'Follow' : 'Unfollow'}</button>*/}
        </span>
                <span>
               <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
            </div>
        })}
    </div>
}