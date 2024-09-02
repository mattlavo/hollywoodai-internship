"use client"
import React, { useEffect } from 'react'
import SettingsDetails from './SettingsDetails'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import SettingsLogin from './SettingsLogin';

function Settings() {

  const user = useSelector((state: RootState) => state.user);

  return (    
    <div className="settings">
        <div className="page-row settings__row">
            <h1 className="settings__title">Settings</h1>
            { !user.email ? (
              <SettingsLogin />
            ) : (
              <SettingsDetails />
            )}
        </div>
    </div>
  )
}

export default Settings