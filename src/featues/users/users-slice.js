import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    usersList: []
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.usersList = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUsers } = userSlice.actions

export default userSlice.reducer