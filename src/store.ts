import { configureStore } from '@reduxjs/toolkit'
import isAuthSlice from './Slices/isAuthSlice'

const store = configureStore({
    reducer: {
        isAuth: isAuthSlice
    },
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch