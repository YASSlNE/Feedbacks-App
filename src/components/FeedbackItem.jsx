import Card from "./shared/Card"
import PropTypes from 'prop-types'
import {FaTimes, FaEdit} from 'react-icons/fa'
import {useContext} from 'react'

import FeedbackContext from "../context/FeedbackContext"



function FeedbackItem({item}) {
  const {deleteFeedback, editFeedback}=useContext(FeedbackContext)
  const close=()=>{
    console.log('123')
  }
  return (
    <Card>
      <div>
        <div className='num-display'>{item.rating}</div>
            <button onClick={()=>deleteFeedback(item.id)} className="close">
              <FaTimes color="red"></FaTimes>
            </button>
            <button onClick={()=>editFeedback(item)} className="edit">
              <FaEdit color='purple'></FaEdit>
            </button>
        <div className="text-display">{item.text}</div>
        </div>
    </Card>

  )
}
FeedbackItem.propTypes={
  item: PropTypes.object.isRequired,
}

export default FeedbackItem