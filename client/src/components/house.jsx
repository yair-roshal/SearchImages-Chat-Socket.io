import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import { useParams } from "react-router-dom"
// hooks
import { useLocalStorage, useChat } from "../hooks"
// components
import { MessageForm } from "./ChatRoom/MessageForm"
import { MessageList } from "./ChatRoom/MessageList"
import { UserList } from "./ChatRoom/UserList"
// styles
import { Container } from "react-bootstrap"

export function House({ house, username }) {
  const { id, name, image, description, artist } = house

  const { roomId } = useParams()
   const { users, messages, sendMessage, removeMessage } = useChat(roomId)
   return (
    <div>
      <article className="house">
        <div className="img-container">
          <img src={image} alt="apartment house" />

          <Link to={`/houses/${id}`} className="btn-primary house-link">
            Features
          </Link>
 
        </div>
        <p className="house-title">{name}</p>
        <p className="house-artist">{artist}</p>
        <p className="house-description">{description}</p>
      </article>
    </div>
  )
}

House.propTypes = {
  house: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artist: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }),
}
