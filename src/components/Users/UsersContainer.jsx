import React from 'react';
import {connect} from "react-redux";
import {isFollowedAC, setUsersAC} from "../../redux/user-reducer";
import {Users} from "./Users";

const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        isFollowed(userId) {
            dispatch(isFollowedAC(userId))
        },
        setUsers(users) {
            dispatch(setUsersAC(users))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)