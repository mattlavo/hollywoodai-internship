"use client";
import React, { useState } from "react";
import { CircularProgress, Modal } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FcGoogle } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import {
  closeLoginModal,
  closeSignUpModal,
  openForgotPassModal,
  openSignUpModal,
} from "@/redux/slices/modalSlice";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, provider } from "@/app/firebase";
import { signInUser } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation";

function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [guestLoading, setGuestLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  async function signInWithGoogle() {
    setGoogleLoading(true);
    try {
      const userCredentials = await signInWithPopup(auth, provider);

      dispatch(
        signInUser({
          email: userCredentials.user.email,
          uid: userCredentials.user.uid,
          subscription: null,
        })
      );
      dispatch(closeLoginModal());
      router.push("/dashboard");
    } catch (err) {
      console.log(`Error signing up: ${err}`);
      setGoogleLoading(false);
    } finally {
      setGoogleLoading(false);
    }
  }

  async function guestLogin() {
    setGuestLoading(true);
    try {
      await signInWithEmailAndPassword(auth, "guest@gmail.com", "guest123");
      dispatch(closeLoginModal());
    } catch (error) {
      console.error(error);
      setGuestLoading(true);
    } finally {
      setGuestLoading(false);
      router.push("/dashboard");
    }
  }

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      dispatch(closeLoginModal());
    } catch (err) {
      setError(`${err}`);
      console.error(`Error signing in ${err}`);
    } finally {
      setLoading(false);
      router.push('/dashboard');
    }
  }

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
          {error && <span className="modal__error">{error}</span>}
          <div className="modal__buttons">
            <button
              className="modal__button"
              onClick={() => signInWithGoogle()}
            >
              <FcGoogle className="modal__button__icon" />
              <span className="modal__button__text">
                {googleLoading ? (
                  <div className="spinner">
                    <CircularProgress
                      className="spinner__icon"
                      variant="determinate"
                      value={75}
                      sx={{ color: "gray", fontSize: "12px" }}
                    />
                  </div>
                ) : (
                  "Login With Google"
                )}
              </span>
            </button>
            <button className="modal__button" onClick={() => guestLogin()}>
              <IoPerson className="modal__button__icon" />
              <span className="modal__button__text">
                {guestLoading ? (
                  <div className="spinner">
                    <CircularProgress
                      className="spinner__icon"
                      variant="determinate"
                      value={75}
                      sx={{ color: "gray", fontSize: "12px" }}
                    />
                  </div>
                ) : (
                  "Login as Guest"
                )}
              </span>
            </button>
          </div>
          <div className="break">
            <div className="break__line"></div>
            <div className="break__or">or</div>
            <div className="break__line"></div>
          </div>
          <form className="modal__form" onSubmit={handleLogin}>
            <div className="modal__form__field">
              <label className="modal__form__field__label">Email Address</label>
              <input
                type="email"
                className="modal__form__field__input"
                placeholder="your@email.com"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="modal__form__field">
              <label className="modal__form__field__label">Password</label>
              <input
                type="password"
                className="modal__form__field__input"
                placeholder="Your password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <span
              className="modal__form__forgotPassword"
              onClick={() => {
                dispatch(closeLoginModal());
                dispatch(openForgotPassModal());
              }}
            >
              Forgot Password?
            </span>
            <button type="submit" className="modal__form__submit">
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
                "Log In"
              )}
            </button>
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
