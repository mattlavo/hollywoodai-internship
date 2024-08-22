import React from 'react'
import { IoMdCheckmark } from "react-icons/io";

interface PlanFeatureProp {
    text: string,
}

function PlanFeature({text}: PlanFeatureProp) {
  return (
    <div className="plan__feature">
        <div className="plan__feature__icon">
            <IoMdCheckmark />
        </div>
        <span className="plan__feature__text">{text}</span>
    </div>
  )
}

export default PlanFeature