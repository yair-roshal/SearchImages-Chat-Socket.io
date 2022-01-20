import { useState, useMemo, useEffect } from "react"

import React from "react"
import HousesList from "./HouseList"
import Loading from "./Loading"
import items from "../data/data"
import Searchbar from "./Searchbar"

export default function Main() {
  const [houses, setHouses] = useState(formatData(items))
  const [housesAll, setHousesAll] = useState(formatData(items))
  const [term, setTerm] = useState("apartment")

  useEffect(() => {
     setHouses(houses)
    setTerm(term)
  }, [houses,term])

  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id
      let image = item.fields.image 
      let house = { ...item.fields, image, id }
      return house
    })
    return tempItems
  } 
  function updateData(data,term) {   
    setHouses(data)
     setTerm(term) 
  } 
  if (!houses) {
    return <Loading />
  }
 
  return (
    <div>
       <Searchbar
            term={term}
            data={housesAll}
            update={updateData}
          />
      <HousesList houses={houses} />
    </div>
  )
}
