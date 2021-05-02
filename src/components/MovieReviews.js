// Code MovieReviews Here
import React from 'react';
import Review from './Review';

const MovieReviews = ({ items }) => (
  <div className="review-list">
    { items.map(review => <Review title={review.display_title} rating={review.mpaa_rating} pick={review.critics_pick}/>) }
  </div>
)

export default MovieReviews;