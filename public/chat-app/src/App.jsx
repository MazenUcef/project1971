import React from 'react';
import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom'
import Login from './pages/Login/Login';
import SignUp from './pages/Signup/SignUp';
import Home from './pages/Home/Home';
import toast, { Toaster } from 'react-hot-toast';
import { useAuthContext } from './Context/AuthContext';

const App = () => {
  const {authUser} = useAuthContext();
  return (
<BrowserRouter>
  <Routes>
    <Route path='/signup' element={authUser ? <Navigate to='/' /> : <SignUp/>}/> 
    <Route path='/login' element={authUser ? <Navigate to='/' /> : <Login/>}/> 
    <Route path='/' element={authUser ? <Home/> : <Navigate to={'/login'} />}/> 
  </Routes>
  <Toaster/>
</BrowserRouter>
  )
}

export default App
