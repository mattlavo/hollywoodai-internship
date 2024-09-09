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
import { getSubscriptionStatus } from "@/stripe/getPremiumStatus";

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
        subscription: false
      }));

      const checkPremium = async () => {
        const premiumStatus = await getSubscriptionStatus();
        if (premiumStatus) {
          dispatch(signInUser({
            email: currentUser.email,
            uid: currentUser.uid,
            subscription: true
          }))
        }
      }

      checkPremium();
    })

    return unsubscribe
  }, [auth.currentUser]);

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
