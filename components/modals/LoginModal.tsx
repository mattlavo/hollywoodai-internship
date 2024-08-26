"use client";
import React from "react";
import { Modal } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FcGoogle } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { closeLoginModal, openForgotPassModal, openSignUpModal } from "@/redux/slices/modalSlice";

function LoginModal() {
  const isOpen = useSelector((state: RootState) => state.modals.loginModalOpen);

  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <Modal open={isOpen} onClose={() => dispatch(closeLoginModal())}>
        <div className="modal">
          <XMarkIcon
            className="modal__close"
            onClick={() => dispatch(closeLoginModal())}
          />
          <h1 className="modal__title">Log In</h1>
          <div className="modal__buttons">
            <button className="modal__button">
              <FcGoogle className="modal__button__icon" />
              <span className="modal__button__text">Login with Google</span>
            </button>
            <button className="modal__button">
              <IoPerson className="modal__button__icon" />
              <span className="modal__button__text">Login as Guest</span>
            </button>
          </div>
          <div className="break">
            <div className="break__line"></div>
            <div className="break__or">or</div>
            <div className="break__line"></div>
          </div>
          <form className="modal__form">
            <div className="modal__form__field">
              <label className="modal__form__field__label">Email Address</label>
              <input
                type="email"
                className="modal__form__field__input"
                placeholder="your@email.com"
              />
            </div>
            <div className="modal__form__field">
              <label className="modal__form__field__label">Password</label>
              <input
                type="password"
                className="modal__form__field__input"
                placeholder="Your password"
              />
            </div>
            <span className="modal__form__forgotPassword" onClick={() => {
              dispatch(closeLoginModal());
              dispatch(openForgotPassModal());
            }}>
              Forgot Password?
            </span>
            <button className="modal__form__submit">Log In</button>
          </form>
          <div className="modal__bottom">
            <span className="modal__bottom__text">
              Don't have an account yet?
            </span>
            <span
              className="modal__bottom__link"
              onClick={() => {
                dispatch(closeLoginModal());
                dispatch(openSignUpModal());
              }}
            >
              Sign Up
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
