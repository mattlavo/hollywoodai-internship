"use client";
import React, { useState } from "react";
import { Modal } from "@mui/material";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { FcGoogle } from "react-icons/fc";
import { IoPerson } from "react-icons/io5";

function ForgotPassword() {
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
            <h1 className="text-[32px] text-[#1f2328] font-extrabold mt-7 mb-5 text-center">
              Forgot Password
            </h1>
            
            
            <form className="flex flex-col items-end gap-4">
              <div className="gap-3 w-full flex flex-col">
                <label className="text-[13px] font-medium text-[#667085]">Email Address</label>
                <input type="email" className="py-2 px-4 h-11 text-[13px] outline-none border border-[#ebebeb] rounded-xl w-full" placeholder="your@email.com" />
              </div>
              <button className="w-full h-11 pt-0 px-5 text-[15px] font-medium rounded-full bg-[#320580] text-white border-none justify-center items-center">Send Instructions</button>
            </form>
           
        </div>
      </Modal>
    </>
  );
}

export default ForgotPassword;
