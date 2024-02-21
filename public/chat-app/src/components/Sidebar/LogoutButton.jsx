import React from 'react'
import {BiLogOut} from 'react-icons/bi'
import UseLogout from '../../Hooks/UseLogout'



const LogoutButton = () => {
const {loading , logout} = UseLogout()


  return (
    <div className='mt-5'>
      {!loading ? (
        <BiLogOut onClick={logout} className="w-6 h-6 text-sky-300 cursor-pointer"/>
      ) : (
        <span className='loading loading-spinner'></span>
      )}
    </div>
  )
}

export default LogoutButton
