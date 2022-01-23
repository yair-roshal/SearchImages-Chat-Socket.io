import React from "react"
import { useParams } from "react-router-dom"
import { items } from "../data/data"
 
export function SingleHouse(props) {
  let params = useParams()

  const housesAll = formatData(items)

  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id
      let image = item.fields.image
      let house = { ...item.fields, image, id }
      return house
    })
    return tempItems
  }

  const { artist, description, image, name } = housesAll[params.id-1]

  return (
    <div>
      {console.log("housesAll", housesAll[0])}
   
      <h1>Id: {params.id}</h1>
  
      <article className="house">

      <p className="house-title">{name}</p>
      <p className="house-artist">{artist}</p>
      <div className="img-container">
        <img src={image} alt="apartment house" /> 
      </div>
    </article>
      
    </div>
  )
}
 
