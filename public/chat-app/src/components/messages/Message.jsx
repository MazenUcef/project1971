import React from 'react'
import { useAuthContext } from '../../Context/AuthContext'
import useConversation from '../../Zustand/UseConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConversation}=useConversation()
  const fromMe = message.senderId === authUser._id;
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleBgColor = fromMe ? 'bg-slate-500' : 'bg-slate-300'
  const fromattedTime = extractTime(message.createdAt)
  const shakeClass = message.shouldShake ? "shake":"";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
            <img src={profilePic} alt='user avatar'/>
            </div>
        </div>
        <div className={`chat-bubble text-white bg-slate-500 ${bubbleBgColor} ${shakeClass} pb-2`}>{message.message}</div>
        <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>{fromattedTime}</div>
    </div>
  )
}

export default Message
