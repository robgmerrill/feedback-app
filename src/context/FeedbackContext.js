import { createContext, useState } from "react";

// create a context 
const FeedbackContext = createContext();

// just a like a component takes in children
export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState([
        {
            id: 1, 
            text: 'This item is from context',
            rating: 4
        }
    ])

    return <FeedbackContext.Provider value={{
        feedback: feedback
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;