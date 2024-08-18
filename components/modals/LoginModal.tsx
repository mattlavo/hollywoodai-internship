"use client";
import React, { useState } from "react";
import { Modal } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FcGoogle } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";

function LoginModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="flex justify-center items-center"
      >
        <div className="w-full h-full sm:w-[400px] sm:h-[640px] bg-white p-8 rounded-[10px] absolute outline-none">
            <XMarkIcon className="w-6 h-auto absolute top-4 right-4 text-[#1f2328] cursor-pointer" onClick={() => setIsOpen(false)} />
            <h1 className="text-[32px] text-[#1f2328] font-extrabold mb-5 text-center">
              Log In
            </h1>
            <div className="flex flex-col gap-3">
              <button className="flex justify-start items-center gap-3 rounded-xl text-sm font-medium py-3 px-5 text-[#404654] border-[3px]  border-[#ebebeb] transition hover:-translate-y-[2px]">
                <FcGoogle className="w-4 h-4" />
                <span className="text-md text-[#404654]">
                  Login with Google
                </span>
              </button>
              <button className="flex justify-start items-center gap-3 rounded-xl text-sm font-medium py-3 px-5 text-[#404654] border-[3px]  border-[#ebebeb] transition hover:-translate-y-[2px]">
                <IoPerson className="w-4 h-4" />
                <span className="text-md text-[#404654]">
                  Login as Guest
                </span>
              </button>
            </div>
            <div className="mt-3 mx-0 flex items-center gap-8 text-[#000000] opacity-60">
              <div className="h-[1px] w-full bg-[#404654] opacity-10"></div>
              <div className="text-[13px]">or</div>
              <div className="h-[1px] w-full bg-[#404654] opacity-10"></div>
            </div>
            <form className="flex flex-col items-end gap-4">
              <div className="gap-3 w-full flex flex-col">
                <label className="text-[13px] font-medium text-[#667085]">Email Address</label>
                <input type="email" className="py-2 px-4 h-11 text-[13px] outline-none border border-[#ebebeb] rounded-xl w-full" placeholder="your@email.com" />
              </div>
              <div className="gap-3 w-full flex flex-col">
                <label className="text-[13px] font-medium text-[#667085]">Password</label>
                <input type="password" className="py-2 px-4 h-11 text-[13px] outline-none border border-[#ebebeb] rounded-xl w-full" placeholder="Your password" />
              </div>
              <span className="text-[13px] text-[#4f46E5] mb-3 cursor-pointer">Forgot Password?</span>
              <button className="w-full h-11 pt-0 px-5 text-[15px] font-medium rounded-full bg-[#320580] text-white border-none justify-center items-center">Log In</button>
            </form>
            <div className="mt-5 text-center text-[13px] flex justify-center gap-1">
              <span className="">Don't have an account yet?</span>
              <span className="underline text-[#4f46e5] cursor-pointer">Sign Up</span>
            </div>
        </div>
      </Modal>
    </>
  );
}

export default LoginModal;
