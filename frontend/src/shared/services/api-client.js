// new videos concept

import axios from 'axios'
export async function getSongs(termName){
    
    const response=await axios.get(`https://itunes.apple.com/search?term=${termName}&limit=15`);
    console.log(response.data['results']);
    return response.data['results'];
}
export const apiClient = {
    get(){

    },
    async post(URL, data){
        try{
        const response = await axios.post(URL, data);
        return response;
        }
        catch(err){
            throw err;
        }
    },
}