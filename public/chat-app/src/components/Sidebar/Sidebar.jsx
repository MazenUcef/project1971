import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='overflow-auto border-r border-slate-300 p-4 flex flex-col'> 
        <SearchInput/>
        <div className='divider mt-4 px-3'></div> 
        <Conversations/>
        <LogoutButton/>
        <h6 className='title text-sky-500 pt-3 hidden md:block text-center'>Project-Chat&copy; by mazen ucef</h6>
    </div>
  )
}

export default Sidebar  
