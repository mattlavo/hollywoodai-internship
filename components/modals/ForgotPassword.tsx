"use client";
import React, { useState } from "react";
import { Modal } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FcGoogle } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { closeForgotPassModal } from "@/redux/slices/modalSlice";

function ForgotPassword() {

  const isOpen = useSelector((state: RootState) => state.modals.forgotPassModal);

  const dispatch: AppDispatch = useDispatch();

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => dispatch(closeForgotPassModal())}
      >
        <div className="modal">
            <XMarkIcon className="modal__close" onClick={() => dispatch(closeForgotPassModal())} />
            <h1 className="modal__title">
              Forgot Password
            </h1>
            
            {/* <span className="modal__error">Firebase Error</span> */}
            
            <form className="modal__form">
              <div className="modal__form__field">
                <label className="modal__form__field__label">Email Address</label>
                <input type="email" className="modal__form__field__input" placeholder="your@email.com" />
              </div>
              <button className="modal__form__submit">Send Instructions</button>
            </form>
           
        </div>
      </Modal>
    </>
  );
}

export default ForgotPassword;
