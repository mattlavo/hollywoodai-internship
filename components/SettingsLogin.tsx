import Image from 'next/image'
import React from 'react'

function SettingsLogin() {
  return (
    <div className="settings__login">
        <Image src="/assets/login.png" alt="Login" width={0} height={0} sizes="100vw" className="settings__login__img" />
        <p className="settings__login__text">Sign in to see your account settings</p>
        <button className="settings__login__button">Login</button>
    </div>
  )
}

export default SettingsLogin