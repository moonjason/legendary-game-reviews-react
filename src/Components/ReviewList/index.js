import React from 'react'
import {
  Container2,
  Review,
  ReviewHeading,
  ReviewTitle,
  Recommended
} from './style'


const ReviewList = (props) => {
  const reviews = props.foundReviews.map(review => {
    if (props.gameId === review.game_id) {
      return (
        <Review key={review.id}>
          {review.is_positive ? <Recommended className="fas fa-thumbs-up"> Recommended</Recommended>
              : <Recommended className="fas fa-thumbs-down"> Not recommended</Recommended>}
          <ReviewHeading>
            <h1>{review.title}</h1>
          </ReviewHeading>
          <h3>{review.body}</h3>
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