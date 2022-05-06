// import PropTypes from 'react'
import {PropTypes} from 'prop-types'

import React,{useContext} from 'react'

import FeedbackContext from '../context/FeedbackContext';


function FeedbackStats() {

  const {feedback}=useContext(FeedbackContext)
    // Calculate ratings avg
    let avg=feedback.reduce((acc, cur)=>{
        return acc+cur.rating
    }, 0)/feedback.length;
    avg=avg.toFixed(1).replace(/[.,]0$/,'')
    avg=(avg>0)?avg:0;
    
  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating : {avg}</h4>
    </div>
  )
}

FeedbackStats.propTypes={
    feedback: PropTypes.array.isRequired,
}

export default FeedbackStats