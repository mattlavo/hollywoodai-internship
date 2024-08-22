"use client"
import React from 'react'
import { FaPlus } from "react-icons/fa";

interface AccordionProps {
    title: string,
    description: string,
}

function Accordion({title, description}: AccordionProps) {
  return (
    <div className="accordion">
        <div className="accordion__header">
            <h4 className="accordion__title">{title}</h4>
            <FaPlus className="accordion__icon" />
        </div>
        <div className="accordion__content" style={{ 'height': '0px' }}>
            <p className="accordion__description">
                {description}
            </p>
        </div>
    </div>
  )
}

export default Accordion