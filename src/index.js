import React from "react"
import ReactDOM from "react-dom"
import "./main.css"
import {Main} from "./components/main"
import {SingleHouse} from "./components/singleHouse"
import { Route, Routes, BrowserRouter } from "react-router-dom"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/houses/:id" element={<SingleHouse />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)
