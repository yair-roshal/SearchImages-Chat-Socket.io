import { useState, useEffect } from "react"

import React from "react"
import { HousesList } from "./houseList"
import { Loading } from "./loading"
import { items } from "../data/data"
import { SearchBar } from "./searchBar"

export function Main() {
  const housesAll = formatData(items)
  const [houses, setHouses] = useState(formatData(items))
  const [term, setTerm] = useState("")

  useEffect(() => {
    setHouses(houses)
    setTerm(term)
  }, [houses, term])

  function updateData(data, term) {
    setHouses(data)
    setTerm(term)
  }
  
  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id
      let image = item.fields.image
      let house = { ...item.fields, image, id }
      return house
    })
    return tempItems
  }



  if (!houses) {
    return <Loading />
  }

  return (
    <div>
      <SearchBar term={term} data={housesAll} update={updateData} />
      <HousesList houses={houses} />
    </div>
  )
}
