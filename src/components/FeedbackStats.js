import React from 'react'
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {

    const {feedback} = useContext(FeedbackContext)
    console.log("feedback", feedback)

    // calculate ratings average
    let average = feedback.reduce((acc, curr) => {
        console.log("curr", curr.rating)
        console.log("acc", acc)
        return (acc + curr.rating) 
    }, 0)
    average = average / feedback.length
    console.log(average)

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '')}</h4>
    </div>
  )
}

export default FeedbackStats
