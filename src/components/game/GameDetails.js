import React, { useContext, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router'
import { GameContext } from './GameProvider'

export const GameDetail = () => {
    const { getGameById } = useContext(GameContext)
    const [game, setGame] = useState({})
    const history = useHistory()
    const {gameId} = useParams()

    useEffect(() => {
        getGameById(gameId).then(game => setGame(game))
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

        </>
    )
}
