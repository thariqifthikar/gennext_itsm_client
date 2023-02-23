import React from 'react'
import ChatCard from './ChatCard';
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
        <p className="P1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores error voluptates totam aperiam est quas distinctio deserunt consequatur laborum et quis, harum vel dolores veritatis. Quis eveniet repellendus vero! Vitae!</p>
        <p className="P2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores error voluptates totam aperiam est quas distinctio deserunt consequatur laborum et quis, harum vel dolores veritatis. Quis eveniet repellendus vero! Vitae!</p>
      </div>
    </div>
 
  )
}
