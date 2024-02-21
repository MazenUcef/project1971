import React , {useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import banner3 from '../../assets/Customer Lifecycle.gif'
import UseLogin from '../../Hooks/UseLogin';



const Login = () => { 

    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");


    const {loading , login} = UseLogin()

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await login(username , password)

    }

    
      return (
    <>
    <div className='flex items-center min-h-screen justify-center'>
        <div className='h-[550px] flex rounded-5 bg-white drop-shadow-lg max-w-4xl rounded-2xl'>
            <div className='relative flex flex-col m-6 space-y-8 md:flex-row md:space-y-0'>
                    <div className='relative text-center'>
                        <img src={banner3} alt='' className='w-[440px]  hidden md:block object-cover banner'/>
                        <p className='text-sky-500 text-xl text-center md:block'><strong>{"Let's"} Go..!!</strong></p>
                        <small className='text-sky-500 text-wrap text-center md:block'>Our Family is waiting...</small>
                        <h6 className='title text-sky-500 pt-3 md:block'>Project-Chat&copy; by mazen ucef</h6>
                    </div>
                    <div className='flex flex-col justify-center p-9 md:p-14'>
                        <div className='header-text mb-4'>
                            <h2 className='text-center text-xl'>Login</h2> 
                        </div>
                        <div className='py-1'>
                            <form onSubmit={handleSubmit} className='flex justify-center gap-2 flex-col items-center inp-grp'>
                            <div className='brand'>
                                <img className='img mb-3' src='https://icon-library.com/images/chat-app-icon/chat-app-icon-24.jpg' alt='' />
                            </div>
                            <div className='py-1'>
                                <input value={username}
                                onChange={(e)=>setUsername(e.target.value)}
                                className='w-full rounded-xl border border-gray-300 p-2' minLength={3} required type='text' placeholder='Enter Username' name='username'/>
                            </div>
                            <div className='py-1'>
                                <input value={password}
                                onChange={(e)=>setPassword(e.target.value)} 
                                className='p-2 w-full rounded-xl border border-gray-300' minLength={7} required type='password' placeholder='Enter Password' name='password'/>
                            </div>
                            <button className='w-full p-2 rounded-lg mb-6 btn-login btn bg-sky-500 text-white hover:text-black' type='submit'
                            disabled={loading}
                            >{loading ? <span className='loading loading-spinner'></span> : "Login"}</button>
                            <span className='text-center text-sm text-black-300'>
                                {"Don't"} have an account ? <Link to="/signup">SignUp</Link>
                            </span>
                            </form>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </>
      )
    }


export default Login

// STARTER CODE FOR THIS FILE


// const Login = () => {
    
//     return (
//   <>
//   <div className='flex items-center min-h-screen justify-center'>
//       <div className='flex rounded-5 p-3 bg-white drop-shadow-lg max-w-4xl rounded-2xl'>
//           <div className='relative flex flex-col m-6 space-y-8 md:flex-row md:space-y-0'>
//                   <div className='relative text-center'>
//                       <img src={banner3} alt='' className='w-[550px]  hidden md:block h-fit object-cover banner'/>
//                       <p className='text-sky-500 text-xl text-center md:block'><strong>{"Let's"} Go..!!</strong></p>
//                       <small className='text-sky-500 text-wrap text-center md:block'>Our Family is waiting...</small>
//                       <h6 className='title text-sky-500 pt-3 md:block'>Project-Chat&copy;</h6>
//                   </div>
//                   <div className='flex flex-col justify-center p-9 md:p-14'>
//                       <div className='header-text mb-4'>
//                           <h2 className='text-center text-xl'>Login</h2> 
//                       </div>
//                       <div className='py-4'>
//                           <form className='flex justify-center gap-2 flex-col items-center inp-grp'>
//                           <div className='brand'>
//                               <img className='img mb-3' src='https://icon-library.com/images/chat-app-icon/chat-app-icon-24.jpg' alt='' />
//                           </div>
//                           <div className='py4'>
//                               <input className='w-full rounded-xl border border-gray-300 p-2' minLength={3} required type='text' placeholder='Enter Username' name='username'/>
//                           </div>
//                           <div className='py-4'>
//                               <input className='p-2 w-full rounded-xl border border-gray-300' minLength={7} required type='password' placeholder='Enter Password' name='password'/>
//                           </div>
//                           <button className='w-full p-2 rounded-lg mb-6 btn-login btn bg-sky-500 text-white hover:text-black' type='submit'>Login</button>
//                           <span className='text-center text-sm text-black-300'>
//                               {"Don't"} have an account ? <Link to="/signup">SignUp</Link>
//                           </span>
//                           </form>
//                       </div>
//                   </div>
//           </div>
//       </div>
//   </div>
//   </>
//     )
//   }


// export default Login