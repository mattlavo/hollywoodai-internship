"use client"
import DashboardNav from "@/components/DashboardNav";
import DashboardSidebar from "@/components/DashboardSidebar";
import StoreProvider from "@/redux/StoreProvider";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { AppDispatch } from "@/redux/store";
import { useDispatch } from "react-redux";
import { signInUser } from "@/redux/slices/userSlice";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // const [user, setUser] = useState(null);
  const dispatch: AppDispatch = useDispatch();


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) return;

      dispatch(signInUser({
        email: currentUser.email,
        uid: currentUser.uid,
        subscription: 'basic'
      }))
    })

    return unsubscribe
  }, []);

  return (
      <div className="">
        <DashboardSidebar />
        <div className="page-content">
          <DashboardNav />
          {children}
        </div>
      </div>
  );
}

export default DashboardLayout;
