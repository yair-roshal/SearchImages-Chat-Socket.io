import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

export  function House({ house }) {
  const { id,name, image, description, artist } = house

  // const chatForm = document.getElementById('chat-form');
  // const chatMessages = document.querySelector('.chat-messages');
  // const roomName = document.getElementById('room-name');
  // const userList = document.getElementById('users');
  
  // // Get username and room from URL
  // // const { username, room } = Qs.parse(location.search, {
  // //   ignoreQueryPrefix: true,
  // // });

  // const { username, room } ={username:"yair",room:"room5"}
  
  // const socket = io();
  
  // // Join chatroom
  // socket.emit('joinRoom', { username, room });
  
  // // Get room and users
  // socket.on('roomUsers', ({ room, users }) => {
  //   outputRoomName(room);
  //   outputUsers(users);
  // });
  
  // // Message from server
  // socket.on('message', (message) => {
  //   console.log(message);
  //   outputMessage(message);
  
  //   // Scroll down
  //   chatMessages.scrollTop = chatMessages.scrollHeight;
  // });
  
  // // Message submit
  // chatForm.addEventListener('submit', (e) => {
  //   e.preventDefault();
  
  //   // Get message text
  //   let msg = e.target.elements.msg.value;
  
  //   msg = msg.trim();
  
  //   if (!msg) {
  //     return false;
  //   }
  
  //   // Emit message to server
  //   socket.emit('chatMessage', msg);
  
  //   // Clear input
  //   e.target.elements.msg.value = '';
  //   e.target.elements.msg.focus();
  // });
  
  // // Output message to DOM
  // function outputMessage(message) {
  //   const div = document.createElement('div');
  //   div.classList.add('message');
  //   const p = document.createElement('p');
  //   p.classList.add('meta');
  //   p.innerText = message.username;
  //   p.innerHTML += `<span>${message.time}</span>`;
  //   div.appendChild(p);
  //   const para = document.createElement('p');
  //   para.classList.add('text');
  //   para.innerText = message.text;
  //   div.appendChild(para);
  //   document.querySelector('.chat-messages').appendChild(div);
  // }
  
  // // Add room name to DOM
  // function outputRoomName(room) {
  //   roomName.innerText = room;
  // }
  
  // // Add users to DOM
  // function outputUsers(users) {
  //   userList.innerHTML = '';
  //   users.forEach((user) => {
  //     const li = document.createElement('li');
  //     li.innerText = user.username;
  //     userList.appendChild(li);
  //   });
  // }


  return (

{/* <div>
<div class="chat-container">
      <header class="chat-header">
        <h1><i class="fas fa-smile"></i> ChatCord</h1>
        <a id="leave-btn" class="btn">Leave Room</a>
      </header>
      <main class="chat-main">
        <div class="chat-sidebar">
          <h3><i class="fas fa-comments"></i> Room Name:</h3>
          <h2 id="room-name"></h2>
          <h3><i class="fas fa-users"></i> Users</h3>
          <ul id="users"></ul>
        </div>
        <div class="chat-messages"></div>
      </main>
      <div class="chat-form-container">
        <form id="chat-form">
          <input
            id="msg"
            type="text"
            placeholder="Enter Message"
            required
            autocomplete="off"
          />
          <button class="btn"><i class="fas fa-paper-plane"></i> Send</button>
        </form>
      </div>
    </div> */}


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
