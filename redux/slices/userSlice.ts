import { createSlice } from '@reduxjs/toolkit'

interface UserState {
  email: string | null;
  uid: string  | null;
  subscription: string | null;
}

const initialState = {
    email: null,
    uid: null,
    subscription: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action) => {
      state.email = action.payload.email;
      state.uid = action.payload.uid;
      state.subscription = action.payload.subscription;
    },
    signOutUser: (state) => {
        state.email = null;
        state.uid = null;
        state.subscription = null;
      }
  }
});

export const { signInUser, signOutUser } = userSlice.actions
export default userSlice.reducer