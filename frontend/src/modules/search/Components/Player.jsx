import { Button } from '@mui/material'
import React from 'react'

const Player = ({fn,song}) => {
  return (
    <>
    <Button onClick={()=>{
        fn(false,null)
    }}variant="contained">Contained</Button>
    {/* {song.artistName} */}

    <audio controls>
        <source src={song?.previewUrl} type="audio/mp4"/>
        Your browser does not support the audio element
    </audio>
    </>
  )
}

export default Player