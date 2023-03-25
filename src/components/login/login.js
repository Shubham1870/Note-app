import { useState } from "react"
import React from "react"
import "./login.css"
import { Link, useNavigate } from "react-router-dom"
const Login=()=>{
   const [userdetails,setuserdetails]=useState({
    email:"",
    password:""
   })
   const [err,seterr]=useState("")
const navigate=useNavigate
   const handlechange=(e)=>{
    setuserdetails({...userdetails,[e.target.name]:e.target.value})
   }

   const handlesubmit=async(e)=>{
    e.preventDefault()

    seterr("loading")

    const data=await fetch("mongodb://localhost/user",{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body:JSON.stringify(userdetails),
    }).then((data)=>{
return data.json()
    }).then((response)=>{
if(response.status=="failed"){
    seterr(response.message)
}else{
    localStorage.setItem("authtoken",response.token)
    localStorage.setItem("id",response.id)
    navigate("/")
}
    })
   }
    return(
        <>
            <div>
                <div id="main-container">
                    <h1 id="heading">Sign In</h1>
                    <div>
                    <form onSubmit={handlesubmit}>
                        <div className="inputs">
                        <div><label>Email</label></div>
                            <input 
                            className="signin-input"
                            placeholder="Email" 
                            type="email" 
                            name="email"
                            onChange={handlechange}
                             />
                        </div>
                        <div className="inputs">
                        <div><label>Password</label></div>
                            <input 
                            className="signin-input"
                            placeholder="Password" 
                            type="password" 
                            name="password"
                            onChange={handlechange}
                             />
                        </div>
                        <div className="inputs">
                            <input id="checkbox" type="checkbox" />
                            <span>Remember Me</span>
                            
                        </div>
                        <div className="inputs">
                           <button className="signin-input" type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
                <div><Link to="/signup">Sign Up</Link></div>
            </div>
           
        </>
    )
}
export default Login