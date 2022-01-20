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
      let images = item.fields.images.map((image) => image.fields.file.url)
      let house = { ...item.fields, images, id }
      return house
    })
    return tempItems
  }

  
  function updateData(data,term) { 
    console.log('data_updateData', data);
    console.log('term_updateData', term);

    setHouses(data)
     setTerm(term)

  }

 
  if (!houses) {
    return <Loading />
  }

  // if (houses.length === 0) {
  //   return (
  //     <div className="empty-search">
  //       <h3>unfortunately no houses matched your search parameters</h3>
  //     </div>
  //   );
  // }

  // setHouses(formatData(items))

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
