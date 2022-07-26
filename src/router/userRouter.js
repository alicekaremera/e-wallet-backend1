import express from "express";
import userController from "../controller/usercontroller";


const userRouter= express.Router();
userRouter.post("/register",userController.CreateUser);
userRouter.get("/all",userController.getAllUsers);
userRouter.get("/:_id",userController.getOneUser);
userRouter.delete("/:id",userController.deleteOneUser);
userRouter.patch("/:id", userController.updateOneUser);

export default userRouter;