import Accordion from './Accordion'
import React from 'react'

function FAQ() {

  const FaQ = [
    {
      question: "What is Hollywood AI?",
      answer: "HollywoodAI is designed to help you get high-quality summaries of your favourite movies instantly, without breaking a sweat. With our intuitive interface and powerful features, you can easily digest any movie in just minutes instead of hours."
    },
    {
      question: "How much does Hollywood AI cost?",
      answer: "Get summaries of your favourite movies on your smartphone, tablet or laptop, all for one fixed monthly or yearly fee. Plans range from $19 per month to $190 per year. No extra costs, no contracts." 
    },
    {
      question: "What can I watch on Hollywood AI",
      answer: "Hollywood AI has an extensive library of feature films. Watch as much as you want, at any time that you want."
    }
  ]

  return (
    <div className="faq">
        <div className="page-row faq__row">
          {FaQ.map((question, index) => (
            <Accordion key={index} title={question.question} description={question.answer} />
          ))}
        </div>
    </div>
  )
}

export default FAQ