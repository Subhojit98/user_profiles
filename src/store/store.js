import { configureStore } from '@reduxjs/toolkit'
import useReducer from "../featues/users/users-slice"
export const store = configureStore({
    reducer: {
        users: useReducer
    },
})