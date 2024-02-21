import React, { useState } from 'react'
import {BsSend} from 'react-icons/bs' 
import UseSendMessage from '../../Hooks/UseSendMessage';

const MessagesInput = () => {
const [message , setMessage] = useState("");
const {loading , sendMessage} = UseSendMessage()
  const handleSubmit = async  (e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("")
  }
  return (
<>
<form className='px-4 my-3' onSubmit={handleSubmit}>
    <div className='w-full relative'>
        <input value={message}
        onChange={(e)=> setMessage(e.target.value)} type='text'
        className='border text-sm rounded-lg block w-full p-2.5  border-gray-600 text-black' placeholder='Send a message'/>
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 hover:text-sky-500'>
        {loading ? <div className='loading loading-spinner'></div> : <BsSend/>}
        </button>
    </div>
</form>
</>
  )
}

export default MessagesInput


