import  express  from "express";
import { userController } from "../controllers/user-controler.js";
const userRoutes=express.Router();

userRoutes.post('/usersignup',userController.register);
userRoutes.post('/userlogin',userController.login);
userRoutes.post('/liked',userController.liked);
userRoutes.post('/getlikedsongs',userController.getliked);
userRoutes.post('/removelike',userController.removelike);

export default userRoutes;