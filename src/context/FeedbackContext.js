import {createContext, useState} from 'react'
import {v4 as uuidv4} from 'uuid'

const FeedbackContext= createContext();

export const FeedbackProvider=({children})=>{
    const [feedback, setFeedback]=useState([{
        id:1,
        text: "this itddddddddddddddddddem",
        rating: 10
    }]);
    const [feedbackEdit, setFeedbackEdit]=useState([{
        item: {},
        edit: false,
    }])

    const deleteFeedback=(id)=>{
        if(window.confirm('Are you sure you want to delete ? ')){
            setFeedback(feedback.filter((item)=>item.id!==id))
        }
    }

    const updateFeedback=(id, upItem)=>{
        // console.log(id, upItem)

        setFeedback(feedback.map((item)=> item.id===id?{ ... item,... upItem }:item))
    }

    const editFeedback=(item)=>{
        setFeedbackEdit({
            item,
            edit:true,
        })
    }

    const addFeedback=(newFeedback)=>{
        console.log(newFeedback)
        newFeedback.id=uuidv4();
        setFeedback([newFeedback,...feedback]);
    }    
    return <FeedbackContext.Provider value={{
        feedback,
        deleteFeedback,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback
    }}>
        {
            children
        }
    </FeedbackContext.Provider>
}
export default FeedbackContext 