import { Button } from '@mui/material'
import React, { useState } from 'react'

const Song = ({fn,song}) => {
  

  const showPlayer=()=>{
    fn(true,song);
  }

  return (
    <>
      <div class="container text-center">
  <div class="row ">
    <div class="col-4 mt-2">
      <img src={song.artworkUrl100}/>

    </div>
    <div class="col-4">
    <p>{song.artistName}</p> 
    <p>{song.trackName}</p>
    </div>
    <div class="col-4">
    <Button onClick={showPlayer} variant="contained">play</Button>
    </div>
  </div>
</div>

       
       
        

    </>
  )
}

export default Song