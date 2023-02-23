import React from 'react'
import ChatCard from './ChatCard';
import ChatRecivedBox from './ChatRecivedBox';
import ChatSendBox from './ChatSendBox';
import './SendAndRecivieMsg.css';


export default function SendAndRecivieMsg() {
  
  return (
    <div className="messaging">
      <div className="Sidebar">
        <p className="topic">All Chats</p>
        <ChatCard/>
        {['','','','','','','','','','','','','','',].map(node=> <ChatCard/>)}
      </div>
      <div className="MessagingPane">
      <ChatRecivedBox/>
      {['','','','','','','','','','','','','','',].map(node=> <ChatRecivedBox/>)}
      <ChatSendBox/>
      {['','','','','','','','','','','','','','',].map(node=> <ChatSendBox/>)}
      </div>
    </div>
 
  )
}
