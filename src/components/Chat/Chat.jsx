import React ,{useState ,useEffect}from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import { useLocation } from 'react-router';
import './Chat.css'
import Infobar from '../InfoBar/Infobar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';


let socket;

const Chat = () => {
  const location =useLocation();
  const [name,setName] = useState('');
  const [room,setRoom]=useState('');
  const [message,setMessage]=useState('');
  const [messages,setMessages]=useState([]);
  const ENDPOINT='https://react-chat-applicationpog.herokuapp.com/';

 
  
  useEffect(()=>{
    const {name , room } = queryString.parse(location.search);
    //
    const io = require("socket.io-client");
    socket=io(ENDPOINT);

    
    setName(name);
    setRoom(room);

    socket.emit('join',{name,room},()=>{
      
    });
    
    return()=> {
      socket.disconnect();

      socket.off();
    }

    console.log(socket);
  },[ENDPOINT,location.search]);


  useEffect(()=>{
    socket.on('message',(message)=>{
      setMessages([...messages,message]);
    })

  },[messages]);

const sendMessage =(event)=>{
  event.preventDefault();
  if(message)
  {
    socket.emit('sendMessage',message,()=>setMessage(''))
  }
}

console.log(message,messages)

  return (
   <div className='outerContainer'>
     <div className='container'>
      <Infobar room={room} />

      <Messages  messages={messages}  name={name} />
      <Input message={message} setMessage={setMessage}  sendMessage={sendMessage} />
     
     </div>
   </div>
  )
}

export default Chat