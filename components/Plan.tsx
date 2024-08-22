import React from 'react'
import PlanFeature from './PlanFeature';

interface PlanProps {
    priceAmount: string;
    text: string;
    plan: string;
    cycle: string;
}

function Plan({priceAmount, text, plan, cycle}: PlanProps) {
  return (
    <div className="plan">
        <div className="plan__price">
            <span className="plan__price__dollar">$</span>
            <h3 className="plan__price__amount">{priceAmount}</h3>
            <span className="plans__price__frequency">{cycle}</span>
       </div>
       <div className="plan__name">{plan}</div>
       <div className="plan__features">
            <PlanFeature text={text} />
       </div>
       <button className="play__button">Choose Plan</button>
    </div>
  )
}

export default Plan