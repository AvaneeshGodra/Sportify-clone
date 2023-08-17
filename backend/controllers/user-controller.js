import { UserModel } from "../db/models/user-schema.js";
import { hashing } from "../utils/encrypt.js";
export const userController = {
    async login(request, response){
        const userInfo = request.body;
        try{
         //  const docs = await UserModel.find({}).exec();
        const doc = await UserModel.findOne({'email':userInfo.email}).exec();
        console.log('Doc is ', doc);
        if(doc && doc._id){
            const plainPassword = userInfo.password;
            const dbPassword = doc.password;
            if(hashing.matchPassword(plainPassword, dbPassword)){
                response.json({message:'Welcome '+doc.name});
            }
            else{
                response.json({message:'Invalid Userid or Password'});
            }
        }
        else{
            response.json({message:'Invalid Userid or Password'});
        }
    }
    catch(err){
        console.log('Error in Login ', err);
        response.json({message:'Invalid Userid or Password'});
    }
        //console.log('Request Body is ', body);
        // if(userInfo.userid == userInfo.password){
        //     response.json({message:' Welcome '+userInfo.userid});
        // }
        // else{
        //     response.json({message:'Invalid Userid or Password'});
        // }
        
    },
}