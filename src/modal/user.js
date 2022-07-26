import mongoose from "mongoose";
import { stringify } from "querystring";
const UserSchema= new mongoose.Schema({
    firstname:String,
    lastname:String,
 
    id:{
        required:true,
        type:String,

    },
    telephone:{
        required:true,
        type:String,

    },
    password
    :{
        required:true,
        type:String,

    }

},
{
timestamps:true,
}
);
const User=mongoose.model('User',UserSchema)
 
 export default User;
   

