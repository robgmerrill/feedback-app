import React from 'react'
import Card from './shared/Card';
import Button from './shared/Button';
import { useState } from 'react';

function FeedbackForm() {

    const [text, setText] = useState('')
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState('')

    function handleTextChange(e) {
        console.log(e)
        setText(e)
    
        if (text === '') {
            setBtnDisabled(true);
            setMessage(null)
        } else if (text !== '' & text.trim().length <= 10) {
            setMessage('Please enter at least ten characters')
            setBtnDisabled(false)
        } else {
            setMessage(null)
            setBtnDisabled(false)
        }

    }

    console.log(text)

  return (
    <Card>
        <form>
            <h2>How would you rate your service with us?</h2>
            {/* @todo -rating select component */}
            <div className='input-group'>
                <input type='text' placeholder='Write a review' onChange={(e) => handleTextChange(e.target.value)} value={text} />
                <Button type='submit' version='primary' isDisabled={btnDisabled} >Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm;