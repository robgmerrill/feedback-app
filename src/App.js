import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm';
// import {v4 as uuidv4} from 'uuid'
import { FeedbackProvider } from './context/FeedbackContext';

function App() {

    return (
        <FeedbackProvider>
            <Header text="Feedback UI" />
            <div className="container">
                <FeedbackForm />
                <FeedbackStats />
                <FeedbackList />
            </div>
        </FeedbackProvider>
        
    )
}

export default App;