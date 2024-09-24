"use client";
import DashboardNav from "@/components/DashboardNav";
import DashboardSidebar from "@/components/DashboardSidebar";
import StoreProvider from "@/redux/StoreProvider";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../firebase";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { signInUser } from "@/redux/slices/userSlice";
import { getSubscriptionStatus } from "@/stripe/getPremiumStatus";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

      if (!currentUser) {
        dispatch(signInUser(null));
        return;
      }

      dispatch(
        signInUser({
          email: currentUser.email,
          uid: currentUser.uid,
          subscription: null,
        })
      );

      const fetchPremium = async () => {
        const premiumStatus = await getSubscriptionStatus();
        dispatch(
          signInUser({
            email: currentUser.email,
            uid: currentUser.uid,
            subscription: premiumStatus,
          })
        );
      }

      try {
        fetchPremium();
      } catch (error) {
        console.error("Error checking premium status", error);
      }
    });

    return () => unsubscribe();
  }, [auth.currentUser]);


  console.log(sidebarOpen)


  return (
    <div className="">
      <DashboardSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="page-content">
        <DashboardNav sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;