import React from 'react'

const ReviewList = (props) => {
  const reviews = props.foundReviews.map(review => {
    if (props.gameId === review.game_id) {
      return (
        <div class="review" key={review.id}>
          <h1>{review && review.title}</h1>
          <h3>{review && review.body}</h3>
          {review.user_id.id === props.currentUser.id 
            ? <>
              <button>Edit</button> 
              <button>Delete</button>
              </>
            : ""
          }
        </div>
      )
    }
  })

  return (
    <div>{reviews}</div>
  )
}

export default ReviewList