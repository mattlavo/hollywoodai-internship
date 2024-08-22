import Accordion from './Accordion'
import React from 'react'

function FAQ() {
  return (
    <div className="faq">
        <div className="page-row faq__row">
          <Accordion title="What is Hollywood AI?" description="This is a description" />
        </div>
    </div>
  )
}

export default FAQ