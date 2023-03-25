const mongoose=require("mongoose")

const connection=()=>{
    mongoose.set("strictQuery",false)
    mongoose.connect(process.env.DATABASE_URL,{useNewUrlParser:true,useUnifiedTopology:true}),
    ()=>{
        console.log("mongodb connected")
    },(err)=>{console.log(err.message)}
    
}
module.exports=connection
