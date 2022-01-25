import { useState } from 'react'
  
export const MessageForm = ({ username, sendMessage }) => {
  const [text, setText] = useState('')
 
  const handleChangeText = (e) => {
    setText(e.target.value)
  }
 
  const handleSendMessage = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed) {
      sendMessage({ messageText: text, senderName: username })
      setText('')
    }
  }

  return (
    <>
      <form onSubmit={handleSendMessage}>
           <input
            value={text}
            onChange={handleChangeText}
            type='text'
            placeholder='Message...'
          />
          <button type='submit' className="btn-primary">
            SEND
          </button> 
       </form>
 
      </>
  )
}
