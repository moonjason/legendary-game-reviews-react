import React from 'react'
import {
  Container2,
  Review,
  UserDiv,
  Username,
  ReviewContent,
  ReviewHeading,
  Recommended,
  InterfaceDiv,
  InterfaceButtons,
  ReviewTitle,
  ReviewBody
} from './style'


const ReviewList = (props) => {
  const reviews = props.foundReviews.map(review => {
    if(props.gameId === review.game_id) {
      return (
        <Review key={review.id}>
          <UserDiv>
            <Username>Posted By: {review.user_id.username}</Username>
          </UserDiv>
          <ReviewContent>
            <ReviewHeading>
              {review.is_positive ? 
                <Recommended className="fas fa-thumbs-up"> Recommended</Recommended>
                : <Recommended className="fas fa-thumbs-down"> Not recommended</Recommended>
              }
              {review.user_id.id === props.currentUser.id ? 
                <InterfaceDiv>
                    <InterfaceButtons>Edit</InterfaceButtons> 
                    <InterfaceButtons onClick={() => props.deleteReview(review.id)}>Delete</InterfaceButtons>
                </InterfaceDiv>
                  : null
              }
            </ReviewHeading>
            <ReviewTitle>{review.title}</ReviewTitle>
            <ReviewBody>{review.body}</ReviewBody>
          </ReviewContent>
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