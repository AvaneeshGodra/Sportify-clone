import { Button } from '@mui/material'
import React, { useState } from 'react'

const Song = ({fn,song}) => {
  

  const showPlayer=()=>{
    fn(true,song);
  }

  return (
    <>
        <p>{song.artistName} {song.trackName}</p>
        <img src={song.artworkUrl100}/>
        <Button onClick={showPlayer} variant="contained">play</Button>

    </>
  )
}

export default Song