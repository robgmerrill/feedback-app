import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'


// create a context 
const FeedbackContext = createContext();

// just a like a component takes in children
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1, 
            text: 'This is feedback item 1',
            rating: 4
        }, 
        {
            id: 2, 
            text: 'This is feedback item 2',
            rating: 7
        }, 
        {
            id: 3, 
            text: 'This is feedback item 3',
            rating: 5
        }, 
    ])

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log('App', id)
            const arrayToFilter = feedback.filter(fItem => fItem.id !== id)
            console.log(arrayToFilter);
            setFeedback(arrayToFilter);
        }
        
    }

    const addFeedback = (feedbackObject) => {
        console.log(feedbackObject)
        feedbackObject.id = uuidv4();
        console.log([...feedback, feedbackObject])
        setFeedback(prev => {
            return [feedbackObject, ...prev];
        })
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback, 
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;