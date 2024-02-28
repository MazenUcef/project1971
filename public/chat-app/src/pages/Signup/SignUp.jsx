import React , {useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import banner2 from '../../assets/Chat.gif'
import GenderCheckBox from './GenderCheckBox';
import UseSignup from '../../Hooks/UseSignup';







const SignUp = () => {
const [inputs , setInputs] = useState({
    fullName:'',
    username:'',
    email:'',
    password:'',
    confirmPassword:'',
    gender:'',
});


 const {loading , signup} = UseSignup()

const handleChechBoxChange = (gender)=>{
    setInputs({...inputs ,gender })
}


const handleSubmit = async (e)=>{
    e.preventDefault();
// console.log(inputs);
await signup(inputs);
};



  return (
<>
<div className='flex items-center min-h-screen justify-center'>
        <div className='h-[550px] flex rounded-5 p-3 bg-white drop-shadow-lg max-w-4xl rounded-2xl'>
            <div className='relative flex flex-col  md:flex-row md:space-y-0'>
                    <div className='flex flex-col items-center justify-center relative text-center'>
                        <img src={banner2} alt='' className='w-[440px]  hidden md:block object-cover banner'/>
                        <p className='text-sky-500 text-xl text-center hidden md:block'><strong>Be Verified</strong></p>
                        <small className='text-sky-500 text-wrap text-center hidden md:block'>Join Our Family...{"Don't"} Stop</small>
                        <h6 className='title text-sky-500 pt-3 hidden md:block'>Project-Chat&copy; by mazen ucef</h6>
                    </div>
                    <div className='flex flex-col justify-center md:p-14'> 
                        <div className='header-text mb-4'>
                            <h2 className='text-center text-xl'>Sign Up</h2> 
                        </div>
                        <div className='py-0'>
                            <form onSubmit={handleSubmit} className='flex justify-center gap-1 flex-col items-center inp-grp'>
                            <div className='brand'>
                                <img className='img mb-3' src='https://icon-library.com/images/chat-app-icon/chat-app-icon-24.jpg' alt='' />
                            </div>
                            <div className=''>
                                <input value={inputs.fullName} onChange={(e)=> setInputs({...inputs , fullName:e.target.value})} 
                                className='w-full rounded-xl border border-gray-300 p-2' minLength={3} required type='text' placeholder='Full Name' name='fullname'/>
                            </div>
                            <div className=''>
                                <input value={inputs.username} onChange={(e)=> setInputs({...inputs , username:e.target.value})} 
                                className='w-full rounded-xl border border-gray-300 p-2' minLength={3} required type='text' placeholder='Enter Username' name='username'/>
                            </div>
                            <div className=''>
                                <input value={inputs.email} onChange={(e)=> setInputs({...inputs , email:e.target.value})} 
                                className='w-full rounded-xl border border-gray-300 p-2' required type='email' placeholder='Email' name='email'/>
                            </div>
                            <div className=''>
                                <input value={inputs.password} onChange={(e)=> setInputs({...inputs , password:e.target.value})} 
                                className='w-full rounded-xl border border-gray-300 p-2' minLength={7} required type='password' placeholder='Enter Password' name='password'/>
                            </div>
                            <div className=''>
                                <input value={inputs.confirmPassword} onChange={(e)=> setInputs({...inputs , confirmPassword:e.target.value})} 
                                className='w-full rounded-xl border border-gray-300 p-2' minLength={7} required type='password' placeholder='Confirm Password' name='confirmPassword'/>
                            </div>
                            <GenderCheckBox onChechBoxChange = {handleChechBoxChange} selectedGender = {inputs.gender}/>
                            <button className='w-full p-2 rounded-lg mb-6 btn-login btn bg-sky-500 text-white hover:text-black' 
                            disabled={loading} type='submit'>{loading ? <span className='loading loading-spinner'></span> : "Create User"}
                            </button>
                            <span className='text-center text-sm text-black-300'>
                            Already Have An Account ? <Link to="/login">SignIn</Link>
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

export default SignUp


// STARTER CODE FFOR THIS FILE
// const SignUp = () => {

//     return (
//   <>
//   <div className='container d-flex align-items-center min-vh-100 justify-content-center'>
//       <div className='row rounded-5 p-3 bg-white shadow box-area'>
//           <div className='text-center col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box'>
//               <div className='featured-image mb-3'>
//               <img src={banner2} alt='' className='img-fluid banner'/>
//               <p className='text-primary fs-5 text-center'><strong>Be Verified</strong></p>
//               <small className='text-primary text-wrap text-center '>Join Our Family...Don't Stop</small>
//               <h6 className='title text-primary pt-3'>Project-Chat&copy;</h6>
//               </div>
//           </div>
//           <div className='col-md-6 right-box'>
//               <div className='row align-items-center'>
//                   <div className='header-text -mb-4'>
//                       <p className='text-center fs-5'>Sign Up Now !!</p> 
//                   </div>
//                   <div>
//                       <form className='d-flex justify-content-center flex-column align-items-center'>
//                           <div className='brand'>
//                               <img className='img mb-3' src='https://icon-library.com/images/chat-app-icon/chat-app-icon-24.jpg' alt='' />
//                           </div>
//                           <div className='input-group mb-1'>
//                               <input className='form-control form-control-lg bg-light fs-6 mb-2' minLength={8} required type='text' placeholder='Full Name' name='fullname'/>
//                           </div>
//                           <div className='input-group mb-1'>
//                               <input className='form-control form-control-lg bg-light fs-6 mb-2' minLength={8} required type='text' placeholder='Username' name='username'/>
//                           </div>
//                           <div className='input-group mb-1'>
//                               <input className='form-control form-control-lg bg-light fs-6 mb-2' required type='email' placeholder='Email' name='email'/>
//                           </div>
//                           <div className='input-group mb-1'>
//                               <input className='form-control form-control-lg bg-light fs-6 mb-2' minLength={7} required type='password' placeholder='Password' name='password'/>
//                           </div>
//                           <div className='input-group mb-1'>
//                               <input className='form-control form-control-lg bg-light fs-6 mb-2' minLength={7} required type='password' placeholder='Confirm Password' name='confirmPassword'/>
//                           </div>
//                           <GenderCheckBox/>
//                           <div className='input-group mb-1'>
//                               <button className='btn btn-lg btn-primary w-100 fs-6 ' type='submit'>Create User</button>
//                           </div>
//                           <span>
//                               Already Have An Account ? <Link to="/login">Login</Link>
//                           </span>
//                       </form>
//                   </div>
//               </div>
//           </div>
//       </div>
//   </div>
//   </>
//     )
//   }
  
//   export default SignUp
  
