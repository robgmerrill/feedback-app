import React from 'react'
import FeedbackItem from './FeedbackItem'

function FeedbackList({feedback, handleDelete}) {
    console.log('feedback list', feedback)
    if (!feedback.length || feedback.length === 0) {
        return <p>No Feedback Yet...</p>
    }
    return (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete}/>
      ))}
    </div>
  )
}

export default FeedbackList
