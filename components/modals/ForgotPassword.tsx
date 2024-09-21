"use client";
import React, { useState } from "react";
import { CircularProgress, Modal } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { closeForgotPassModal } from "@/redux/slices/modalSlice";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/app/firebase";

function ForgotPassword() {
  const isOpen = useSelector(
    (state: RootState) => state.modals.forgotPassModal
  );
  const [error, setError] = useState<{} | null>(null);
  const [email, setEmail] = useState<any>("");
  const [loading, setLoading] = useState(false);

  const dispatch: AppDispatch = useDispatch();

  const sendPasswordReset = async () => {
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      alert(`A Password Reset Link has been sent to ${email}`);
    } catch (err) {
      setError(`Firebase: ${error}`);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Modal open={isOpen} onClose={() => dispatch(closeForgotPassModal())}>
        <div className="modal">
          <XMarkIcon
            className="modal__close"
            onClick={() => dispatch(closeForgotPassModal())}
          />
          <h1 className="modal__title">Forgot Password</h1>
          {error && (
            <span className="modal__error">Firebase Error: {`${error}`}</span>
          )}
          <form className="modal__form">
            <div className="modal__form__field">
              <label className="modal__form__field__label">Email Address</label>
              <input
                type="email"
                className="modal__form__field__input"
                placeholder="your@email.com"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <button
              className="modal__form__submit"
              onClick={() => sendPasswordReset()}
            >
              {loading ? (
                <div className="spinner">
                  <CircularProgress
                    className="spinner__icon"
                    variant="determinate"
                    value={75}
                    sx={{ color: "white", fontSize: "12px" }}
                  />
                </div>
              ) : (
                "Send Instructions"
              )}
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default ForgotPassword;
