import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  email: string | null;
  uid: string  | null;
  subscription: boolean;
}

const initialState: UserState = {
    email: null,
    uid: null,
    subscription: false,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInUser: (state, action: PayloadAction<UserState | null>) => {
      if (action.payload) {
        state.email = action.payload.email;
        state.uid = action.payload.uid;
        state.subscription = action.payload.subscription;
      } else {
        state.email = null
        state.uid = null
        state.subscription = false
      }
    },
    signOutUser: (state) => {
        state.email = null;
        state.uid = null;
        state.subscription = false;
      }
  }
});

export const { signInUser, signOutUser } = userSlice.actions
export default userSlice.reducer