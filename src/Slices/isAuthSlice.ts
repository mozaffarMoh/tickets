import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface AuthState {
    value: boolean | null
}
const initialState: AuthState = {
    value: null,
}

export const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState: initialState,
    reducers: {
        setIsAuth: (state, action: PayloadAction<boolean | null>) => {
            state.value = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setIsAuth } = isAuthSlice.actions

export default isAuthSlice.reducer