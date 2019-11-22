import React from 'react'
import {
  Container2,
  Review,
  ReviewHeading
} from './style'


const ReviewList = (props) => {
  const reviews = props.foundReviews.map(review => {
    if (props.gameId === review.game_id) {
      return (
        <Review key={review.id}>
          <ReviewHeading>
            <h1>{review && review.title}</h1>
            {review.is_positive ? <i class="fas fa-thumbs-up"> Recommended</i>
              : <i className="fas fa-thumbs-down"> Not recommended</i>}
          </ReviewHeading>
          <h3>{review && review.body}</h3>
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
    <Container2>
      {reviews}
    </Container2>
  )
}

export default ReviewList