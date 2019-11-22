import React from 'react'
import {
   Review
} from './style'


const ReviewList = (props) => {
  const reviews = props.foundReviews.map(review => {
    if (props.gameId === review.game_id) {
      return (
        <Review key={review.id}>
          <h1>{review && review.title}</h1>
          <h3>{review && review.body}</h3>
          {review.is_positive ? <div>positive</div> : <div>negative</div>}
          {review.user_id.id === props.currentUser.id 
            ? <>
              <button>Edit</button> 
              <button onClick={() => props.deleteReview(review.id)}>Delete</button>
              </>
            : ""
          }
        </Review>
      )
    }
  })

  return (
    <div>{reviews}</div>
  )
}

export default ReviewList