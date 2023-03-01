import { useState } from "react";
import Card from '../components/shared/Card.js'
import {FaTimes} from 'react-icons/fa'

import React from 'react'

function FeedbackItem({item}) {

  function handleClick (item) {
    console.log(item.id)
  }

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <div className='text-display'>{item.text}</div>
      <button onClick={() => handleClick(item)} className='close'><FaTimes color='purple'></FaTimes></button>
    </Card>
  )
}

export default FeedbackItem
