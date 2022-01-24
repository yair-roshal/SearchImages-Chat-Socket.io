import React from "react"
import { useParams } from "react-router-dom"
import { items } from "../data/data"
// hooks
import { useLocalStorage, useChat } from "../hooks"
// components
import { MessageForm } from "./ChatRoom/MessageForm"
import { MessageList } from "./ChatRoom/MessageList"
// styles
import { Container,Grid, Row, Col } from "react-bootstrap"

 export function SingleHouse(props) {
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
  console.log("housesAll", housesAll)
  const { artist, image, name } = housesAll[roomId]

  const [username] = useLocalStorage("username")
  const { messages, sendMessage, removeMessage } = useChat(roomId)

  return (
    <div>
      <Container>
        <Row>
          <Col>
            
              <h2 className="text-center">
                Room: {roomId === "job" ? "Job" : "Free"}
              </h2>
              <MessageList messages={messages} removeMessage={removeMessage} />
              <MessageForm username={username} sendMessage={sendMessage} />
         
          </Col>
          <Col>
           
            <article className="house">
              <h1>Id: {roomId}</h1>

              <p className="house-title">{name}</p>
              <p className="house-artist">{artist}</p>
              <div className="img-container">
                <img src={image} alt="apartment house" />
              </div>
            </article>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
