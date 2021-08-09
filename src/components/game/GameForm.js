import React, { useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { GameContext } from "./GameProvider"
import { CategoryContext } from "./CategoryProvider"



export const GameForm = () => {
    const history = useHistory()
    const { createGame } = useContext(GameContext)
    const { categories, getCategories } = useContext(CategoryContext)

    /*
        Since the input fields are bound to the values of
        the properties of this state variable, you need to
        provide some default values.
    */
    const [currentGame, setCurrentGame] = useState({
        title: "",
        description: "",
        creator: "",
        year_released: "",
        number_of_players: 0,
        duration: 0,
        age_rec: 0,
        categories: [],
        player: localStorage.getItem("lu_token")
    })


    useEffect(() => {
        getCategories()
    }, [])



    const changeGameNameState = (event) => {
        const newGameState = { ...currentGame }
        newGameState[event.target.name] = event.target.value
        setCurrentGame(newGameState)
    }

    const handleSaveGame = (event) => {
        event.preventDefault()

        const game = {
            title: currentGame.title,
            description: currentGame.description,
            creator: currentGame.creator,
            year_released: currentGame.year_released,
            number_of_players: parseInt(currentGame.number_of_players),
            duration: currentGame.duration,
            age_rec: parseInt(currentGame.age_rec),
            categories: currentGame.categories,
            player: localStorage.getItem("lu_token")
        }

        // Send POST request to your API
        createGame(game)
            .then(() => history.push("/games"))
    }


    return (
        <form className="gameForm">
            <h2 className="gameForm__name">Register New Game</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Game Title: </label>
                    <input type="text" name="title" required autoFocus className="form-control"
                        value={currentGame.title}
                        onChange={changeGameNameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="description">Description: </label>
                    <input type="text" name="description" required autoFocus className="form-control"
                        value={currentGame.description}
                        onChange={changeGameNameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="creator">Creator: </label>
                    <input type="text" name="Creator" required autoFocus className="form-control"
                        value={currentGame.creator}
                        onChange={changeGameNameState}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="year_released">Year Released: </label>
                    <input type="text" name="year_released" required autoFocus className="form-control"
                        value={currentGame.year_released}
                        onChange={changeGameNameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="duration">Duration: </label>
                    <input type="text" name="duration" required autoFocus className="form-control"
                        value={currentGame.duration}
                        onChange={changeGameNameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="age_rec">Age Recommendation: </label>
                    <input type="text" name="age_rec" required autoFocus className="form-control"
                        value={currentGame.age_rec}
                        onChange={changeGameNameState}
                    />
                </div>
            </fieldset>

            

            <fieldset>
                <div className="form-group">
                    <label htmlFor="number_of_players">Number of Players: </label>
                    <input type="text" name="number_of_players" required autoFocus className="form-control"
                        value={currentGame.number_of_players}
                        onChange={changeGameNameState}
                    />
                </div>
            </fieldset>

            <fieldset>
                <div className="form-group">
                    <label htmlFor="category">Game Category: </label>
                    <select type="select" name="categories" required autoFocus className="form-control"
                        value={currentGame.categories}
                        onChange={changeGameNameState}>
                        <option value="0">Select Game Category</option>
                        {categories.map((element => {
                            return <option value={element.id}>
                                {element.label}
                            </option>
                        }))}
                    </select>

                </div>
            </fieldset>

            {/* You create the rest of the input fields for each game property */}

            <button type="submit"
                onClick={handleSaveGame}
                className="btn btn-primary">Create Game</button>
        </form>
    )
}