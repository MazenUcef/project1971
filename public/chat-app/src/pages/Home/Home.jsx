import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'

const Home = () => {
  return (
<>
<div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden items-center min-h-screen justify-center'>
  <div className='h-[550px] flex rounded-5 p-3 bg-white drop-shadow-lg max-w-4xl rounded-2xl'>
      <Sidebar/>
      <MessageContainer/>
  </div>
</div>
</>
  )
}

export default Home
