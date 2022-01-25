import React from "react"
import { useParams } from "react-router-dom"
import { items } from "../data/data" 
import { useLocalStorage, useChat } from "../hooks" 
import { MessageForm } from "./ChatRoom/MessageForm"
import { MessageList } from "./ChatRoom/MessageList"
  
export function SingleHouse() {
  const [username] = useLocalStorage("username")

  function formatData(items) {
    let tempItems = items.map((item) => {
      let id = item.sys.id
      let image = item.fields.image
      let house = { ...item.fields, image, id }
      return house
    })
    return tempItems
  }

  const { roomId } = useParams()
  const housesAll = formatData(items)
   const { artist, image, name } = housesAll[roomId] 
   const { messages, sendMessage } = useChat(roomId)

  return (
    
      <div className="wrapper">
        <div className="column-1">
          <article className="house"> 
            <p className="house-title">{name}</p>
            <p className="house-artist">{artist}</p>
            <div className="img-container2">
              <img src={image} alt="apartment house" />
            </div>
          </article>
        </div>

        <div className="column-2">
          <h2 className="text-center">Chat</h2>
          <MessageList messages={messages}   />
          <MessageForm username={username} sendMessage={sendMessage} />
        </div>
      </div>
  
  )
}
