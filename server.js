
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import  userRouter from "./src/router/userRouter" 
import bodyparser from "body-parser"   



dotenv.config("./.env")
const app = express();
app.use("/user",bodyparser.json());

app.use("/user",userRouter);

app.use("/", (req,res)=> res.status(200).json({
    message:"The  API doesn't exist"
})  );

 const dbUrl=process.env.DATABASEURL;
 mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})

export default app;



