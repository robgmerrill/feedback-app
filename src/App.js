import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm';
// import {v4 as uuidv4} from 'uuid'
import { FeedbackProvider } from './context/FeedbackContext';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    console.log(feedback)

    // const deleteFeedback = (id) => {
    //     if (window.confirm('Are you sure you want to delete?')) {
    //         console.log('App', id)
    //         const arrayToFilter = feedback.filter(fItem => fItem.id !== id)
    //         console.log(arrayToFilter);
    //         setFeedback(arrayToFilter);
    //     }
        
    // }

    // const addFeedback = (feedbackObject) => {
    //     console.log(feedbackObject)
    //     feedbackObject.id = uuidv4();
    //     console.log([...feedback, feedbackObject])
    //     setFeedback(prev => {
    //         return [feedbackObject, ...prev];
    //     })
    // }

    console.log("feedback", feedback)

    return (
        <FeedbackProvider>
            <Header text="Feedback UI" />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedback={feedback} />
            </div>
        </FeedbackProvider>
        
    )
}

export default App;