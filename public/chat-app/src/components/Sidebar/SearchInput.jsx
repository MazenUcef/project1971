import React, { useState } from 'react'
import { FaSearch } from "react-icons/fa";
import useConversation from '../../Zustand/UseConversation';
import UseGetConversation from '../../Hooks/UseGetConversation';
import toast from 'react-hot-toast';



const SearchInput = () => {
  const [search , setSearch] = useState("");
const {setSelectedConversation} = useConversation()

const {conversations} = UseGetConversation() 

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return;
    if(search.length < 3) {
      return toast.error('Search term must be at least 3 characters long')
    }

const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))
if(conversation){
  setSelectedConversation(conversation)
  setSearch('')
}else{
  toast.error('No such User found!')
}
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex items-center gap-2 mt-2'>
        <input type='text' placeholder='Search...' className='input input-bordered rounded-full' 
        value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className='btn btn-circle bg-sky-300 text-white'>
        <FaSearch className='w-3 h-3 outline-none'  />
        </button> 
      </form>
    </div>
  )
}

export default SearchInput





// const SearchInput = () => {
//   return (
//     <div>
//       <form className='flex items-center gap-2 mt-2'>
//         <input type='text' placeholder='Search...' className='input input-bordered rounded-full'/>
//         <button className='btn btn-circle bg-sky-300 text-white'>
//         <FaSearch className='w-3 h-3 outline-none'  />
//         </button> 
//       </form>
//     </div>
//   )
// }

// export default SearchInput
