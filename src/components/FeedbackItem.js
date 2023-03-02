import { useState } from "react";
import Card from '../components/shared/Card.js'
import {FaTimes} from 'react-icons/fa'
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext.js";
import React from 'react'

function FeedbackItem({item, handleDelete}) {

  const {deleteFeedback} = useContext(FeedbackContext)

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'><FaTimes color='purple'></FaTimes></button>
    </Card>
  )
}

export default FeedbackItem
