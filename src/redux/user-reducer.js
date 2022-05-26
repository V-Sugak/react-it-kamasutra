const initialState = []

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case isFollowed : {
            return state.map(u => u.id === action.userId ? {...u, isFollowed: !u.isFollowed} : u)
        }
        case setUsers: {
            return [...state, ...action.users]
        }
        default:
            return state
    }
}

const isFollowed = 'IS-FOLLOWED'
const setUsers = 'SET-USERS'
export const isFollowedAC = (userId) => {
    return {type: isFollowed, userId}
}
export const setUsersAC = (users) => {
    return {type: setUsers, users}
}
