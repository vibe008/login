import React,{useState} from 'react'
import './Login.css'
import Box from '../coponents/Box'
import Swal from 'sweetalert2'


function Login() {
const [userCred,setUserCred]=useState({email:null,password:null}) 
const [isLogin, setIsLogin]=useState(false)
const [response , setResponse] = useState(null)


const loginclick =async (e)=>{
  e.preventDefault()
  console.log(userCred);
 let result =  await fetch("http://192.168.1.5:4000/api/user/login" , {
  method:'post',
  headers:{
 'Content-Type':'application/x-www-form-urlencoded',
  },
  body:new URLSearchParams({'email':userCred.email,'password':userCred.password})
 })
 let resp = await result.json()
 setResponse(resp)

 console.log(resp);

 if(resp.status===200){
  setIsLogin(true)
 }
 else{
  Swal.fire('Invalid',"Invalid Username or Password",'error')
 }
//  console.log(resp.status);

}
  return (
    <>
    {!isLogin ?       <section className='login'>
      <div className="login">
  <div className="login-triangle"></div>
  
  <h2 className="login-header">Manager Login</h2>

  <form className="login-container">
    <p><input type="email" placeholder="Email" onChange={(e)=>setUserCred({...userCred,email:e.target.value})} /></p>
    <p><input type="password" placeholder="Password" onChange={(e)=>setUserCred({...userCred,password:e.target.value})}/></p>
    {/* <Link to='/Box'><input type="submit" value="Log in"/></Link> */}
    <div className="d-flex justify-content-center">

    <button onClick={loginclick} className='btn btn-primary'>Log in</button>
    </div>
  </form>
</div>
      </section> : <Box  response={response}/>}

    </>
  )
}

export default Login
