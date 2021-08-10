import React from "react"
import { Route } from "react-router-dom"
import { GameList } from "./game/GameList.js"
import { GameProvider } from "./game/GameProvider.js"
import { GameDetail } from "./game/GameDetails"
import { GameForm } from "./game/GameForm.js"
import { CategoryProvider } from "./game/CategoryProvider.js"
import { ReviewProvider } from "./game/ReviewProvider.js"
import { ReviewForm } from "./game/ReviewForm.js"


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
                    <ReviewProvider>
                        <Route exact path="/games/detail/:gameId(\d+)">
                            <GameDetail />
                        </Route>
                    </ReviewProvider>
                    <Route exact path="/games/new">
                        <GameForm />
                    </Route>

                    <ReviewProvider>
                        <Route exact path="/games/:gameId(\d+)/review">
                            <ReviewForm />
                        </Route>
                    </ReviewProvider>
                </CategoryProvider>
            </GameProvider>

        </main>
    </>
}
