import React, { useState } from "react"

export const ReviewContext = React.createContext()

export const ReviewProvider = (props) => {
    const [ reviews, setReviews ] = useState([])
    

    const getReviews = () => {
        return fetch("http://localhost:8000/reviews", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setReviews)
    }

    const getReviewByGameId = (id) => {
        return fetch(`http://localhost:8000/reviews?game=${id}`, {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
        .then(response => response.json())
    }

    const createReview = (review) => {
        return fetch("http://localhost:8000/reviews", {
            method: "POST",
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body:JSON.stringify(review)
         })
            
            .then(getReviews)
    }

    return (
        <ReviewContext.Provider value={{ reviews, getReviews, getReviewByGameId, createReview }} >
            { props.children }
        </ReviewContext.Provider>
    )
}