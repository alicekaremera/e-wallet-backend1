import  UserInfos  from  "../modal/user";

 class userController{
    //  CREATE A USER

    static async CreateUser(req,res){
    const user = await UserInfos.create(req.body);
    
    if(!user){
        return res
        .status(404)
        .json({ Error: "user not registed" })

    }
    return res.status(200).json({ message: "user created successfully", data: user });
  
}
 static async getAllUsers(req,res){
     const users= await UserInfos.find();
     if(!users){
         return res.status(404).json({error:"user is not found"})
     }
     return res.status(200).json({message:"users are retrieved well", data: users})

 }
//  get ane user
static async getOneUser(req, res) {
    const user = await UserInfos.findById(req.params._id);
    if (!user) {
      return res.status(404).json({ Error: "user not found" })
    }

    return res.status(200).json({ message: "user found successfully", data: user });
}
// delete one user

static async deleteOneUser(req,res) {

 const user = await UserInfos.findByIdAndDelete(req.params.id);
 

 if (!user) {
    return res.status(404).json({ Error: "user  not found " })
  }

  return res.status(200).json({ message: "user remouved successiful",  });
}
  
static async updateOneUser(req,res){
    
    const user = await UserInfos.findByIdAndUpdate
    (req.params.id , req.body,{new:true});
 
      if(!user){
         return res.status(404).json({error:"user  is not updated"})     }
      return res
      .status(200)
      .json({message:" user updated successfully", data: user});
   }

 }
 export default  userController; 
