const express=require("express")
const app=express()
const PORT=8080

const dotenv=require("dotenv").config()
const cors=require("cors")


const userRouter=require("./routes/user.js")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/",noteroutes)
app.use("/",userRouter)

app.listen(PORT||process.env.PORT,()=>{console.log("server started")})