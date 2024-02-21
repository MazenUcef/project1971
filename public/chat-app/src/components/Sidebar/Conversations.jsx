import React from 'react'
import Conversation from './Conversation'
import UseGetConversation from '../../Hooks/UseGetConversation';
import { getRandomEmoji } from '../../utils/emojis';

const Conversations = () => {
const {loading , conversations} = UseGetConversation();
// console.log("CONVERSATION",conversations);


  return (
    <div className='py-2 flex flex-col overflow-auto'> 
    {conversations.map((conversation ,idx)=>(
      <Conversation 
      key={conversation._id}
      conversation = {conversation}
      emoji={getRandomEmoji()}
      lastIdx = {idx === conversations.length -1 }
      />
    ))}
      {loading ? <span className='loading loading-spinner'></span> : null}
    </div>
  )
}

export default Conversations
