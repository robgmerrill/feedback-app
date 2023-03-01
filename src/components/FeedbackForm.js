import React from 'react'
import Card from './shared/Card';
import Button from './shared/Button';
import { useState } from 'react';

function FeedbackForm() {

    const [text, setText] = useState('')

    function handleTextChange(e) {
        console.log(e)
        setText(e)
    }

    console.log(text)

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            {/* @todo -rating select component */}
            <div className='input-group'>
                <input type='text' placeholder='Write a review' onChange={(e) => handleTextChange(e.target.value)} value={text} />
                <Button type='submit' version='primary' >Send</Button>
            </div>
        </form>
    </Card>
  )
}

export default FeedbackForm;