"use client";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import Skeleton from "./ui/Skeleton";
import SettingsLogin from "./SettingsLogin";
import { signInUser } from "@/redux/slices/userSlice";
import { getSubscriptionStatus } from "@/stripe/getPremiumStatus";
import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";

function SettingsDetails() {
  const [loading, setLoading] = useState(true); // Start in loading state
  const user = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (!currentUser) {
        dispatch(signInUser(null));
        setLoading(false); 
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
      };

      try {
        await fetchPremium();
      } catch (error) {
        console.error("Error checking premium status", error);
      } finally {
        setLoading(false); 
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  if (loading) {
    return (
      <>
        <div className="settings__detail">
          <div className="settings__detail__title">
            <Skeleton width={"193px"} height={"24px"} borderRadius={"4px"} />
          </div>
          <div className="settings__detail__text">
            <Skeleton width={"60px"} height={"24px"} borderRadius={"4px"} />
          </div>
        </div>
        <div className="settings__detail">
          <div className="settings__detail__title">
            <Skeleton width={"193px"} height={"24px"} borderRadius={"4px"} />
          </div>
          <div className="settings__detail__text">
            <Skeleton width={"60px"} height={"24px"} borderRadius={"4px"} />
          </div>
        </div>
      </>
    );
  }

  if (!user?.email) {
    return <SettingsLogin />;
  }

  return (
    <>
      <div className="settings__detail">
        <h2 className="settings__detail__title">Your Subscription Plan</h2>
        <span className="settings__detail__text">
          {user.subscription || "Basic"}
        </span>
        {user.subscription === null && (
          <Link href="/plans" className="settings__detail__button">
            <span className="settings__detail__button__text">Upgrade</span>
            <BsLightningChargeFill className="settings__detail__button__icon" />
          </Link>
        )}
      </div>
      <div className="settings__detail">
        <h2 className="settings__detail__title">Email</h2>
        <span className="settings__detail__text">{user.email}</span>
      </div>
    </>
  );
}

export default SettingsDetails;
