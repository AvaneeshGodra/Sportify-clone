import { Button } from '@mui/material'
import React, { useState } from 'react'

const Song = ({fn,song}) => {
  

  const showPlayer=()=>{
    fn(true,song);
  }

  return (
    <>
      <div className="container text-cente card" id='bg'>
      <div className="row mt-2 ">
    <div className="col-4 mt-2">
      <img src={song.artworkUrl100}/>

    </div>
    <div className="col-4">
    <p>Artist Name:<h6> {song.artistName}</h6></p> 
    <p> Song Name :<h6> {song.trackName}</h6></p>
    </div>
    <div className="col-4">
    <Button className='mt-5'onClick={showPlayer} variant="contained">play</Button>
    </div>
  </div>
</div>

       
       
        

    </>
  )
}

export default Song