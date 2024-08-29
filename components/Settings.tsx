import React, { useEffect } from 'react'
import SettingsDetails from './SettingsDetails'

function Settings() {

  return (    
    <div className="settings">
        <div className="page-row settings__row">
            <h1 className="settings__title">Settings</h1>
            <SettingsDetails />
            {/* <SettingsLogin /> */}
        </div>
    </div>
  )
}

export default Settings