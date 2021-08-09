import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { GameDetail } from "./game/GameDetails"
import { GameForm } from "./game/GameForm.js"
import { CategoryProvider } from "./game/CategoryProvider.js"


export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <GameProvider>
                <CategoryProvider>
                    <Route exact path="/games">
                        <GameList />
                    </Route>
                    <Route exact path="/games/detail/:gameId(\d+)">
                        <GameDetail />
                    </Route>
                    <Route exact path="/games/new">
                        <GameForm />
                    </Route>
                </CategoryProvider>
            </GameProvider>

        </main>
    </>
}
