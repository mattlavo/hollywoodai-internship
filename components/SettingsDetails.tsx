"use client"
import { RootState } from '@/redux/store';
import Link from 'next/link'
import React from 'react'
import { BsLightningChargeFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

function SettingsDetails() {

  const user = useSelector((state: RootState) => state.user);

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
                    <span className="settings__detail__text">{user.subscription}</span>
                  </>
                )}
            </div>
            <div className="settings__detail">
                <h2 className="settings__detail__title">Email</h2>
                <span className="settings__detail__text">{user.email}</span>
            </div>
    </>
  )
}

export default SettingsDetails