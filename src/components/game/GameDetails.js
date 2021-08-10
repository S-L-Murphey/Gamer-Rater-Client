import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { GameContext } from './GameProvider'
import { Review } from './Review'
import { ReviewContext } from './ReviewProvider'

export const GameDetail = () => {
    const { getGameById } = useContext(GameContext)
    const { getReviewByGameId } = useContext(ReviewContext)
    const [game, setGame] = useState({})
    const [review, setReview] = useState([])
    const history = useHistory()
    const {gameId} = useParams()

    useEffect(() => {
        getGameById(gameId).then(game => setGame(game))
    }, [gameId])

    useEffect(() => {
        getReviewByGameId(gameId).then(review => setReview(review))
    }, [gameId])

    

    return (
        <>
            <h2>Game Details</h2>
            <div>{game.title}</div>
            <div>{game.creator}</div>
            <div>{game.year_released}</div>
            <div>{game.duration}</div>
            <div>{game.age_rec}</div>
            <div>Categories: {
                    game.categories?.map(c => 
                        <div>{ c.label }</div>
                    )}
            </div>
            <h3>
                Reviews:
            </h3>
            {review.map(rev => {
                if (rev.game.id === game.id){
                    return <div>{rev.review} <div>Star Rating: {rev.rating}</div>
                    </div>
                }
            })}
            {/*<Review />*/}
            <button className="btn" onClick={() => history.push(`/games/${gameId}/review`)}>Add Review</button>

        </>
    )
}
