// new videos concept

import axios from 'axios'
export async function getSongs(termName){
    
    const response=await axios.get(`https://itunes.apple.com/search?term=${termName}&limit=15`);
    return response.data['results'];
}
export const networkOperations={
    async get(){
        try{
 
        }
        catch(err){
            throw err;
        }

    },
    async post(URL,data){
        try{
            const response= await axios.post(URL,data);
            return response;
        }
        catch(err){
            throw err;
        }
        
    },
    put(){

    },
    remove(){

    }
}