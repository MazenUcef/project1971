import React from 'react'
import useConversation from '../../Zustand/UseConversation'
import { useSocketContext } from '../../Context/SocketContext';

const Conversation = ({conversation , lastIdx , emoji}) => {
  const {selectedConversation , setSelectedConversation} = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  const {onlineUsers} = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id);
  return (
    <>
    <div className={`flex gap-2 items-center hover:bg-sky-300 rounded p-2 py-1 cursor-pointer
    ${isSelected ? "bg-sky-400" : ""}
    `}
    onClick={()=>setSelectedConversation(conversation)}
    > 
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className='w-12 rounded-full'>
          <img src={conversation.profilePic} alt='user avatar'/>
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
          <p className='font-bold text-sm'>{conversation.fullName}</p>
          <span className='text-cl'>{emoji}</span>
        </div>
      </div>
    </div>

    {!lastIdx && <div className='divider my-0 py-0 h-1'/> }
    </>
  )
}

export default Conversation







// const Conversation = () => {
//   return (
//     <>
//     <div className='flex gap-2 items-center hover:bg-sky-300 rounded p-2 py-1 cursor-pointer'> 
//       <div className='avatar online'>
//         <div className='w-12 rounded-full'>
//           <img src='https://cdn0.iconfindere.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png' alt='user avatar'/>
//         </div>
//       </div>
//       <div className='flex flex-col flex-1'>
//         <div className='flex gap-3 justify-between'>
//           <p className='font-bold text-sm'>John Doe</p>
//           <span className='text-cl'>emoj</span>
//         </div>
//       </div>
//     </div>

//     <div className='divider my-0 py-0 h-1'/> 
//     </>
//   )
// }

// export default Conversation
