import React, { useEffect, useState, useContext } from 'react'
import Card from './shared/Card'
// import {} from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

// import {useContext} from 'react'
import FeedbackContext from '../context/FeedbackContext';


function FeedbackForm() {




    const[text, setText]=useState('');

    const[btnDisabled, setBtnDisabled]=useState(true);

    const [rating, setRating]=useState(2);

    const[message, setMessage]=useState();

    const {addFeedback, updateFeedback, feedbackEdit }=useContext(FeedbackContext)

    useEffect(()=>{
        if(feedbackEdit.edit===true){
            setBtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    }, [feedbackEdit])

    const handleText=(e)=>{
        if(text===''){
            setBtnDisabled(true);
            setMessage(null);
        }
        else if(text!=='' && text.trim().length < 10){
            setMessage('Text must be at least 10 characters');
            setBtnDisabled(true)
        }
        else{
            setMessage(null);
            setBtnDisabled(false )
        }

        setText(e.target.value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(text.trimEnd().length>10){
            const newFeedback={
                text ,
                rating,
            }
        // console.log(rating)
        if(feedbackEdit.edit===true){
            updateFeedback(feedbackEdit.item.id, newFeedback)
            feedbackEdit.edit=false
        }
        else{
            addFeedback(newFeedback);
        }
        setText('');
    }
}
  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>
                How would you rate your service with us
            </h2>
            <RatingSelect select={(z)=>setRating(z)}></RatingSelect>
            <div className="input-group">
                <input onChange={handleText} type="text" value={text} placeholder='Write a review' />
                <Button type="submit" isDisabled={btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm