"use client";
import React, { useState } from "react";
import PlanFeature from "./PlanFeature";
import { loadCheckout } from "@/stripe/stripePayment";
import { CircularProgress } from "@mui/material";

interface PlanProps {
  priceAmount: string;
  productId: string;
  features: { text: string }[];
  plan: string;
  cycle: string;
}

function Plan({ priceAmount, productId, features, plan, cycle }: PlanProps) {
  const [loading, setLoading] = useState<{ [key: string]: boolean }>({});

  const selectPlan = async (productId: string) => {
    setLoading((prev) => ({
      ...prev,
      [productId]: true,
    }));
    try {
      loadCheckout(productId);
    } catch (error) {
      console.error(error);
    } 
  };

  console.log(loading)

  return (
    <div className="plan">
      <div className="plan__price">
        <span className="plan__price__dollar">$</span>
        <h3 className="plan__price__amount">{priceAmount}</h3>
        <span className="plan__price__frequency">{cycle}</span>
      </div>
      <div className="plan__name">{plan}</div>
      <div className="plan__features">
        {features.map((feature, index) => (
          <PlanFeature text={feature.text} key={index} />
        ))}
      </div>
      <button
        className="plan__button"
        onClick={() => {
          selectPlan(productId);
        }}
        disabled={loading[productId]}
      >
        {loading[productId] ? (
          <div className="spinner">
            <CircularProgress
              className="spinner__icon"
              variant="determinate"
              value={75}
              sx={{ color: "white", fontSize: "12px" }}
            />
          </div>
        ) : (
          "Choose Plan"
        )}
      </button>
    </div>
  );
}

export default Plan;
