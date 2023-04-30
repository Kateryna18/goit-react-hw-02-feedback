import React from 'react'
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export default function FeedbackOptions({options, onLeaveFeedback}) {
  return (
    <div>
        {options.map(option => <button key={option} className={css.feedbackButton} name={option} onClick={onLeaveFeedback}>{option}</button>)} 
    </div>
  )
}


