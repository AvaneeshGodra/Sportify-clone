import { userModel } from "../db/models/user-schema.js";
import { likedModel } from "../db/models/liked-schema.js";
import {hashing} from "../utils/encrypt.js"
import  jwt from "jsonwebtoken";
export const userController={
    async login(req,res){
        const body=req.body;
       const doc=await userModel.findOne({'email':body.email}).exec();
       if(doc && doc._id){
        const plainPassword=body.password;
        const dbPassword=doc.password;
        if(hashing.matchPassword(plainPassword,dbPassword)){
            const data = {
                'userdata':doc,
                'email': doc.email,
            
              };
            const authtoken = jwt.sign(data,'aaaaaa');
            const success = true;
            res.json({
              success,
              authtoken,

            });
        }
        else{
            res.json({message:'invalid userid or password'});

        }
       }
       else{
        res.json({message:'invalid userid or password'})
       }
    },
    async register(req,res){
      
        const userInfo=req.body;
        userInfo.password=hashing.passwordHash(userInfo.password);
      
        try{
        const doc=await userModel.create(userInfo);
        if(doc && doc._id){
            res.json({message:'register sucessesfully'})
         
        }
        else{
            res.json({message:'not registered'})
        }
    }
    catch(err){
        res.json({message:'not registered'})
        console.log(err);
    }

    },
   async verifytoken(req,res){
    try {
        const data = jwt.verify(req.body.authtoken, 'aaaaaa');
      
        res.json({data})
    } catch (error) {
        res.status(400).send({error:'Time out'})
    }
   } ,
   
   async liked(req,res){
    const consult=req.body;
   
    try{
        const doc=await likedModel.create(consult);
        if(doc && doc._id){
            res.json({message:'Song added to liked'});
        }
        else{
            res.json({message:'song already added'});
        }
    }
    catch(err){
       
        res.json({message:'Error adding the liked song'});
    }
     
    
    },
    async getliked(req,res){
        try{
            const doc=await likedModel.find({'email':req.body.email}).exec();
            // console.log("Doc is",doc);
            res.json({message:doc});
        }
        catch(err){
            console.log("Error in getting songs ",err);
        }
    },
    async removelike(req, res) {
        try {
            console.log(req.body)
          const songNameToRemove = req.body.songName;
          const email = req.body.email;
      
          // Remove the document(s) that match the email and contain the song to be removed
          const removedDoc = await likedModel.deleteMany({
            'email': email,
            'songNmae': songNameToRemove
          }).exec();

      
          res.json({ message: 'Song removed successfully', removedDoc });
        } catch (err) {
          console.log("Error in removing song: ", err);
          res.status(500).json({ message: 'Internal server error' });
        }
      }

   }
