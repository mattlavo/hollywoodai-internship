"use client"
import { openLoginModal } from '@/redux/slices/modalSlice'
import Image from 'next/image'
import React from 'react'
import { useDispatch } from 'react-redux'

function SettingsLogin() {

  const dispatch = useDispatch()

  return (
    <div className="settings__login">
        <Image src="/assets/login.png" alt="Login" width={0} height={0} sizes="100vw" className="settings__login__img" />
        <p className="settings__login__text">Sign in to see your account settings</p>
        <button className="settings__login__button" onClick={() => dispatch(openLoginModal())}>Login</button>
    </div>
  )
}

export default SettingsLogin