import React, { useEffect, useState } from 'react'
import { networkOperations } from '../../../shared/services/api-client';
import Song from './Song';
import { getSongs } from '../../../shared/services/api-client';
import Likedsongs from './Likedsongs';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Liked = () => {
 
    const [songs,setSong]=useState([])
    const [printsong,setPrintsong]=useState()
    const getsongs=async()=>{
        const email=localStorage.getItem("email");
    const userInfo = {
      email:email,
    };
    try {
      const response = await networkOperations.post(
        process.env.REACT_APP_GETLIKE,
        userInfo
      ); //backend
       
        setSong(response.data.message);
      }
     catch (err) {
      // console.log(err);
     
    }
    }
    useEffect(()=>{
        getsongs();
  
    },[])
   console.log(songs);
    
  return (
    <>
        <Link to ='/'>
        <Button><b>BACK</b></Button>
      </Link>
        {songs.map((currentSong,index)=><Likedsongs key={index} s={currentSong}/>)}

    </>
  )
}

export default Liked