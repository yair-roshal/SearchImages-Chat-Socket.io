import React from "react"
import { NameForm } from "./components/nameForm"
import { Main } from "./components/main"

import { SingleHouse } from "./components/singleHouse"
import { Route, Routes, BrowserRouter } from "react-router-dom"
  
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact={true} element={<NameForm />} />
        <Route path="/main" element={<Main />} />
        <Route path="/houses/:roomId" element={<SingleHouse/>} />
      </Routes>
    </BrowserRouter>
  )
}
