import React, { useContext, useState, useEffect } from "react"
import { useHistory, useParams } from "react-router-dom"
import { ReviewContext } from "./ReviewProvider"

export const ReviewForm = () => {
    const history = useHistory()
    const { createReview } = useContext(ReviewContext)
    const { gameId } = useParams()


    const [currentReview, setCurrentReview] = useState({
        review: "",
        rating: 0,
        player: localStorage.getItem("lu_token"),
        game: gameId
    })

    const handleUserInput = (event) => {
        const newReviewState = { ...currentReview }
        newReviewState[event.target.name] = event.target.value
        setCurrentReview(newReviewState)
    }

    const starRating = [
        {
            id: 1,
            stars: 1
        },
        {
            id: 2,
            stars: 2
        },
        {
            id: 3,
            stars: 3
        },
        {
            id: 4,
            stars: 4
        },
        {
            id: 5,
            stars: 5
        }
    ]

    const handleSaveReview = (event) => {
        event.preventDefault()

        const review = {
            review: currentReview.review,
            rating: currentReview.rating,
            game: gameId,
            player: localStorage.getItem("lu_token")
        }

        // Send POST request to your API
        createReview(review)
            .then(() => history.push(`/games/detail/${gameId}`))
    }


    return (
        <form className="gameForm">
            <h2 className="gameForm__name">New Game Review:</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="review">Review: </label>
                    <textarea type="text" name="review" required autoFocus className="form-control"
                        value={currentReview.review}
                        onChange={handleUserInput}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="rating">Rating: </label>
                    <select type="select" name="rating" required autoFocus className="form-control"
                        value={currentReview.rating}
                        onChange={handleUserInput}>
                        <option value="0">Select Star Rating</option>
                        {starRating.map((element => {
                            return <option value={element.id}>
                                {element.stars}
                            </option>
                        }))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={handleSaveReview}
                className="btn btn-primary">Save Review</button>
        </form>
    )
}


