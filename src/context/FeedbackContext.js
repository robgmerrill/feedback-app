import { createContext, useState } from "react";
import { useEffect } from "react";


// create a context 
const FeedbackContext = createContext();

// just a like a component takes in children
export const FeedbackProvider = ({children}) => {
    const [isLoading, setIsLoading] = useState(true)
    const [feedback, setFeedback] = useState([])

    useEffect( () => {
        fetchFeedback();
    }, [])

    const fetchFeedback = async() => {
        const response = await fetch('/feedback?_sort=id&_order=desc')
        console.log(response)
        const data = await response.json()
        console.log(data)
        setFeedback(data)
        setIsLoading(false)
    }


    // Delete feedback
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            console.log('App', id)
            const arrayToFilter = feedback.filter(fItem => fItem.id !== id)
            console.log(arrayToFilter);
            setFeedback(arrayToFilter);
        }
        
    }

    const addFeedback = async (newFeedback) => {
        const response = await fetch('/feedback', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFeedback),
        })
    
        const data = await response.json()
    
        setFeedback([data, ...feedback])
      }
    


    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {}, 
        edit: false
    })

    // Update feedback item
    const updateFeedback = (id, updateItem) => {
        console.log(id, updateItem)
        // find by id and replace with updateItem
        setFeedback(feedback.map(item => item.id === id ? {...item, ...updateItem} : item ))
    }

    // Set item to be updated
    const editFeedback = (item) => {
        setFeedbackEdit({
            item, 
            edit: true,
        })
    }

    return <FeedbackContext.Provider value={{
        feedback: feedback, 
        deleteFeedback: deleteFeedback,
        addFeedback: addFeedback,
        editFeedback: editFeedback,
        isLoading: isLoading,
        feedbackEdit: feedbackEdit,
        updateFeedback: updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
}

export default FeedbackContext;