import React from 'react';
import s from './Users.module.css'

export const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([{
            id: 1,
            photo: 'https://media.vogue.ru/photos/5ef5995856a994c4560ced25/master/pass/%D0%B2%D0%B8%D0%BA%D0%B01.jpg',
            isFollowed: false,
            fullName: 'Tory K.',
            status: 'Hello',
            location: {
                country: 'RB',
                city: 'Minsk',
            },
        },
            {
                id: 2,
                photo: 'https://media.vogue.ru/photos/5ef5995856a994c4560ced25/master/pass/%D0%B2%D0%B8%D0%BA%D0%B01.jpg',
                isFollowed: false,
                fullName: 'Ira T.',
                status: 'Yo',
                location: {
                    country: 'Russia',
                    city: 'Moscow',
                },
            },
            {
                id: 3,
                photo: 'https://media.vogue.ru/photos/5ef5995856a994c4560ced25/master/pass/%D0%B2%D0%B8%D0%BA%D0%B01.jpg',
                isFollowed: false,
                fullName: 'Dima V.',
                status: 'Yes',
                location: {
                    country: 'RB',
                    city: 'Minsk',
                },

            }])
    }
    return <div>
        {props.users.map(user => {
            return <div>
        <span>
         <div>
             <img className={s.photo} src={user.photo}/>
         </div>
             <button onClick={() => props.isFollowed(user.id)}>{user.isFollowed ? 'Follow' : 'Unfollow'}</button>
        </span>
                <span>
               <div>{user.fullName}</div>
            <div>{user.status}</div>
        </span>
                <span>
               <div>{user.location.country}</div>
            <div>{user.location.city}</div>
        </span>
            </div>
        })}
    </div>
}