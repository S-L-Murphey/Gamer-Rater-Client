import React, { useState, useContext, useEffect } from 'react'
import { ReviewContext } from './ReviewProvider'
import { useParams } from 'react-router'

export const Review = () => {
    const { getReviewByGameId } = useContext(ReviewContext)
    const [ reviews, setReviews ] = useState([])
    const { gameId } = useParams()

    useEffect(() => {
        getReviewByGameId(gameId).then(reviews => setReviews(reviews))
    }, [gameId])

    console.log(reviews)

    return (
        <div>
            {reviews.map(rev =>
                <>
                    <div>{rev.review}</div>
                    <div>Star Rating:
                        {rev.rating}</div>
                </>
            )}
        </div>
    )
}