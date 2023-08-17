import React from 'react'
import Song from './Song'

const Songs = ({allSongs,fn}) => {
  return (
    <>
      
        {allSongs.map((currentSong,index)=><Song fn={fn}key={index}song={currentSong}/>)}
    </>
  )
}

export default Songs