import ForgotPassword from "@/components/modals/ForgotPassword";
import LoginModal from "@/components/modals/LoginModal";
import SignUpModal from "@/components/modals/SignUpModal";
import Settings from "@/components/Settings";
import React from "react";

function SettingsPage() {
  return (
    <>
      <Settings />
      <LoginModal />
      <SignUpModal />
      <ForgotPassword />
    </>
  );
}

export default SettingsPage;
