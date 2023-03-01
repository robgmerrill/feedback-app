import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    console.log(feedback)

    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log('App', id)
            const arrayToFilter = feedback.filter(fItem => fItem.id !== id)
            console.log(arrayToFilter);
            setFeedback(arrayToFilter);
        }
        
    }

    return (
        <>
            <Header text="Feedback UI" />
            <div className="container">
                <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
            </div>
        </>
        
    )
}

export default App;