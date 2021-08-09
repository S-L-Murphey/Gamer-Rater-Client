import React, { useContext, useEffect } from "react"
import { GameContext } from "./GameProvider.js"
import { useHistory, Link } from "react-router-dom"

export const GameList = (props) => {
    const { games, getGames } = useContext(GameContext)
    const history = useHistory()

    useEffect(() => {
        getGames()
    }, [])

    return (
        <>
        <article className="games">
            {
                games.map(game => {
                    return <section key={`game--${game.id}`} className="game">
                       <Link className="game__link" to={`games/detail/${game.id}`}>{game.title} by {game.creator}</Link> 
                    </section>
                })

            }
            <button className="btn btn-2 btn-sep icon-create"
                onClick={() => {
                    history.push({ pathname: "/games/new" })
                }}
            >Register New Game</button>
        </article>
        </>
    )
}