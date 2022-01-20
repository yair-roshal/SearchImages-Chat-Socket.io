import { createContext, useState, useContext, useMemo, useEffect } from "react"
// import Card from "../components/Card"
import HouseContainer from "../components/HouseContainer"

import React from "react"
// import HousesFilter from "./HouseFilter";
import HousesList from "./HouseList"
// import { withHouseConsumer } from "../context";
import Loading from "./Loading"
import items from "../data/data"

export default function Main() {
  // const [userName, setUserName] = useState("John Smith")
  const [houses, setHouses] = useState([])
  // const value = useMemo(() => ({ userName, setUserName }), [userName])

  useEffect(() => {
    // let houses = formatData(items)
    setHouses( formatData(items))
  }, [])

  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id
      let images = item.fields.images.map((image) => image.fields.file.url)
      let house = { ...item.fields, images, id }
      return house
    })
    return tempItems
  }

  // const { loading, sortedHouses, houses } = context;

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <div>
      {/* <UserNameInput />
      <UserInfo /> */}

      <HousesList houses={houses} />
    </div>
  )
}

// function UserNameInput() {
//   const { userName, setUserName } = useContext(UserContext)
//   const changeHandler = (event) => setUserName(event.target.value)

//   return <input type="text" value={userName} onChange={changeHandler} />
// }

// function UserInfo() {
//   const { userName } = useContext(UserContext)
//   return <span>{userName}</span>
// }
