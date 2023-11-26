import mongoose from "../connection.js";
import {SchemaTypes} from "mongoose";

const Schema=mongoose.Schema;
const likedSchema=new Schema({
    'email':{type:SchemaTypes.String ,required:true},
    'songId':{type:SchemaTypes.String},
    "artistName": {type:SchemaTypes.String},
    "songNmae": {type:SchemaTypes.String,required:true,unique:true},
    "image": {type:SchemaTypes.String}
});

export const likedModel=mongoose.model('liked_songs',likedSchema);