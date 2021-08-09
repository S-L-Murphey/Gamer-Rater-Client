import React from "react"
import ReactDOM from "react-dom"
import { GamerRater } from "./components/GamerRater.js"
import { BrowserRouter as Router } from "react-router-dom"
import "./index.css"

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <GamerRater />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
)
