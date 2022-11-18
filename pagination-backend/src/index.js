const express=require("express")
const app = express()

require('dotenv').config()
app.use(express.json())

const dataController=require("./controllers/data.controller");


app.get("/",(req,res)=>{
    return res.status(200).json("Hello world")
})


app.use("/api",dataController);


const connect=require("./configs/db")


const port=process.env.PORT || 5000
app.listen(port,async()=>{
    try {
        await connect();
        console.log(`Listening on port ${port}`)
    } catch (error) {
        console.log({"error":error.message})
    }
});