import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";
import './Input.css'
const Input = ({message ,setMessage,sendMessage}) => {
  return (
    <form  className="form">
        <input type="text" 
        className='input'
         placeholder='Type a message'
         value={message} 

        onChange={(event)=> setMessage(event.target.value)} 

        onKeyPress={(event)=> event.key === 'Enter' ? sendMessage(event):null} />
        <button className='sendButton' onClick={(event)=> sendMessage(event)}><i className="bi bi-send"></i></button>
    </form>
  )
}

export default Input