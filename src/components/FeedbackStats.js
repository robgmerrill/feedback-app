import React from 'react'

function FeedbackStats({feedback}) {
    // calculate ratings average
    let average = feedback.reduce((acc, curr) => {
        return (acc + curr.rating) / feedback.length;
    }, 0)
    console.log(average)

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average.toFixed(1).replace(/[.,]0$/, '')}</h4>
    </div>
  )
}

export default FeedbackStats
