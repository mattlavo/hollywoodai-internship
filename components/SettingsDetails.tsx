"use client";
import { RootState } from "@/redux/store";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsLightningChargeFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import Skeleton from "./ui/Skeleton";
import SettingsLogin from "./SettingsLogin";

function SettingsDetails() {
  const [loading, setLoading] = useState(true);
  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    setLoading(true);
    try {
      console.log("ye");
    } catch (error) {
      console.error("");
    } finally {
      setLoading(false);
    }
  }, []);

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

  if (!user?.uid) {
    return <SettingsLogin />;
  }

  if (user?.subscription === null) {
    return (
      <>
        <div className="settings__detail">
          <h2 className="settings__detail__title">Your Subscription Plan</h2>
          {user.subscription === null ? (
            <>
              <span className="settings__detail__text">Basic</span>
              <Link href="/plans" className="settings__detail__button">
                <span className="settings__detail__button__text">Upgrade</span>
                <BsLightningChargeFill className="settings__detail__button__icon" />
              </Link>
            </>
          ) : (
            <>
              <span className="settings__detail__text">
                {user.subscription}
              </span>
            </>
          )}
        </div>
        <div className="settings__detail">
          <h2 className="settings__detail__title">Email</h2>
          <span className="settings__detail__text">{user.email}</span>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="settings__detail">
        <h2 className="settings__detail__title">Your Subscription Plan</h2>
        <span className="settings__detail__text">{user.subscription}</span>
      </div>
      <div className="settings__detail">
        <h2 className="settings__detail__title">Email</h2>
        <span className="settings__detail__text">{user.email}</span>
      </div>
    </>
  );

 
}

export default SettingsDetails;
