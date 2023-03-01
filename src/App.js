import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import FeedbackData from './data/FeedbackData';

function App() {
    const [feedback, setFeedback] = useState(FeedbackData)
    console.log(feedback)

    return (
        <>
            <Header text="Feedback UI" />
            <div className="container">
                <FeedbackList feedback={feedback} />
            </div>
        </>
        
    )
}

export default App;