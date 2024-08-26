"use client";
import React, { useState } from "react";
import { Modal } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FcGoogle } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { closeSignUpModal, openLoginModal } from "@/redux/slices/modalSlice";

function SignUpModal() {
  // const [isOpen, setIsOpen] = useState(true);

  const isOpen = useSelector(
    (state: RootState) => state.modals.signUpModalOpen
  );

  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <Modal open={isOpen} onClose={() => dispatch(closeSignUpModal())}>
        <div className="modal">
          <XMarkIcon
            className="modal__close"
            onClick={() => dispatch(closeSignUpModal())}
          />
          <h1 className="modal__title">Sign Up</h1>
          <div className="modal__buttons">
            <button className="modal__button">
              <FcGoogle className="modal__button__icon" />
              <span className="modal__button__text">Sign up with Google</span>
            </button>
            <button className="modal__button">
              <IoPerson className="modal__button__icon" />
              <span className="modal__button__text">Sign up as Guest</span>
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
            <button className="modal__form__submit">Sign Up</button>
          </form>
          <div className="modal__bottom">
            <span className="modal__bottom__text">
              Already have an account?
            </span>
            <span
              className="modal__bottom__link"
              onClick={() => {
                dispatch(closeSignUpModal());
                dispatch(openLoginModal());
              }}
            >
              Log In
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default SignUpModal;
