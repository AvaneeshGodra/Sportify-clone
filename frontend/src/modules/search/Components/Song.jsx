import { Button } from '@mui/material'
import React, { useState } from 'react'
import Appcss from '../../../App.css'
import { networkOperations } from '../../../shared/services/api-client'
import Swal from 'sweetalert2'
import { useEffect } from 'react'

const Song = ({fn,song}) => {
  const [message,setMessage]=useState('')

  const showPlayer=()=>{
    fn(true,song);
  }
  const like=async()=>{
    const email=localStorage.getItem("email");
   
    const userInfo = {
      email: email,
      artistName: song.artistName,
      songNmae: song.trackName,
      image: song.artworkUrl100

    };

    try {
      const response = await networkOperations.post(
        "http://localhost:1234/liked",
        userInfo
      ); //backend
      setMessage(response.data.message)
      
      }
     catch (err) {
      // console.log(err);
     
    }
  };
  
  useEffect(()=>{
    
    if(message == 'Song added to liked'){ 
      Swal.fire('Success!',`Song added to liked `,'success');
      }
      else if(message==''){
      
      }
    else{
      Swal.fire('failed!','song already added to liked','error');
    }
},[like])

  const cardStyle = {
    border: '1px solid #C4FB6D',
    transition: 'box-shadow 0.3s ease-in-out',
  };

  const glowStyle = {
    boxShadow: '0 0 10px 3px #C4FB6D',
  };

  return (
    <>
  <div
      className="container text-center card mt-4"
      id="bg"
      style={cardStyle}
      onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 0 10px 3px #C4FB6D'}
      onMouseOut={(e) => e.currentTarget.style.boxShadow = ''}
    >

      <div className="row mt-2 ">
      <div className="col-4 mt-2">
  <img
    src={song.artworkUrl100}
    style={{
      border: '3px solid #C4FB6D', // Solid border with the specified color
      borderRadius: '8px', // Optional: Add border radius for a slightly rounded border
      padding: '5px', // Optional: Add padding for space around the image
    }}
  />
</div>




    <div className="col-4" id='text'>
    {/* <p>Artist Name:<h6> {song.artistName}</h6></p> 
    <p> Song Name :<h6> {song.trackName}</h6></p> */}
    <p><h5 style={{ color: 'green' }}>Artist Name:</h5> <h6 style={{ color: '#C4FB6D' }}>{song.artistName}</h6></p>
    <p><h5 style={{ color: 'green' }}>Song Name:</h5><h6 style={{ color: '#C4FB6D' }}>{song.trackName}</h6></p>
    </div>
    <div className="col-4">
    <Button color="success" className='mt-5 mx-4'onClick={showPlayer} variant="contained">play</Button>
    <Button color="info" className='mt-5' onClick={like} variant="contained">LIKE</Button>

    </div>
  </div>
</div>

       
       
        

    </>
  )
}

export default Song