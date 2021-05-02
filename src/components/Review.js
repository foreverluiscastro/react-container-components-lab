import React from 'react';

const Review = ({title, rating, pick}) => (
    <div className="review">
        <h1>{title}</h1>
        <h1>{rating}</h1>
        <h2>{pick}</h2>
    </div>
)

export default Review;