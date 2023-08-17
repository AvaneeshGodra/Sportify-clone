import express from 'express';
import {userController} from '../controllers/user-controller.js';
export const userRoutes = express.Router();
userRoutes.post('/login', userController.login);
// Read / Write
//userRoutes.put('/change-password') // Updation
//userRoutes.delete('/remove-account'); // Deletetion
// export default routes;

// CRUD Operations