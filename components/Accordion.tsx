"use client"
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa";

interface AccordionProps {
    title: string,
    description: string,
}

function Accordion({title, description}: AccordionProps) {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="accordion" >
        <div className="accordion__header" onClick={() => setIsOpen(prev => !prev)}>
            <h4 className="accordion__title">{title}</h4>
            <FaPlus className="accordion__icon" />
        </div>
        <div className="accordion__content"  style={{ height: isOpen ? '42px' : '0px' }} >
            <p className="accordion__description">
                {description}
            </p>
        </div>
    </div>
  )
}

export default Accordion