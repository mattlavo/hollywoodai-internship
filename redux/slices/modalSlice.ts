import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    loginModalOpen: false,
    signUpModalOpen: false,
    forgotPassModal: false,
    dashboardSidebar: false,
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openLoginModal: (state) => {
        state.loginModalOpen = true;
    },
    closeLoginModal: (state) => {
        state.loginModalOpen = false;
    },
    openSignUpModal: (state) => {
        state.signUpModalOpen = true;
    },
    closeSignUpModal: (state) => {
        state.signUpModalOpen = false;
    },
    openForgotPassModal: (state) => {
        state.forgotPassModal = true;
    },
    closeForgotPassModal: (state) => {
        state.forgotPassModal = false;
    },
    openDashboardSidebar: (state) => {
        state.dashboardSidebar = true;
    },
    closeDashboardSidebar: (state) => {
        state.dashboardSidebar = false;
    }
  } 
});

export const { openLoginModal, closeLoginModal, openSignUpModal, closeSignUpModal, openForgotPassModal, closeForgotPassModal, openDashboardSidebar, closeDashboardSidebar } = modalSlice.actions

export default modalSlice.reducer