import { useState } from "react"
import React from "react"
import "./signup.css"
import { useNavigate } from "react-router-dom"
const Signup=()=>{
    const navigate=useNavigate
   const [userdetails,setuserdetails]=useState({
    email:"",
    password:"",
    confirmpassword:""
   })
   const [err,seterr]=useState("")

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
    }).then(data=>{
console.log(data)
    })
    if(data.status=="failed"){
        seterr(data.message)
    }else{
        navigate("/")
    }
   }
    return(
        <>
            <div>
                <div id="main-container">
                    <h1 id="heading">Sign Up</h1>
                    <div>
                    <form onSubmit={handlesubmit}>
                        <div className="inputs">
                        <div><label>Email</label></div>
                            <input 
                            className="signup-input"
                            placeholder="Email" 
                            type="email" 
                            name="email"
                            onChange={handlechange}
                             />
                        </div>
                        <div className="inputs">
                        <div><label>Password</label></div>
                            <input 
                            className="signup-input"
                            placeholder="Password" 
                            type="password" 
                            name="password"
                            onChange={handlechange}
                             />
                        </div>
                        <div className="inputs">
                        <div><label>Confirm Password</label></div>
                            <input 
                            className="signup-input"
                            placeholder="Confirm Password" 
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
                           <button className="signup-input" type="submit">Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
           
        </>
    )
}
export default Signup