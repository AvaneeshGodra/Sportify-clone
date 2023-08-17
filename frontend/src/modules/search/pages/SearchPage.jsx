import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import Songs from '../Components/Songs.jsx'
import { getSongs } from '../../../shared/services/api-client'
import Player from '../Components/Player'
import Header from '../../../shared/components/Header'
import { styled, useTheme } from '@mui/material/styles';

const WallPaper = styled('div')({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  left: 0,
  overflow: 'hidden',
  background: 'linear-gradient(rgb(255, 38, 142) 0%, rgb(255, 105, 79) 100%)',
  transition: 'all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s',
  '&:before': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    top: '-40%',
    right: '-50%',
    background:
      'radial-gradient(at center center, rgb(62, 79, 249) 0%, rgba(62, 79, 249, 0) 64%)',
  },
  '&:after': {
    content: '""',
    width: '140%',
    height: '140%',
    position: 'absolute',
    bottom: '-50%',
    left: '-30%',
    background:
      'radial-gradient(at center center, rgb(247, 237, 225) 0%, rgba(247, 237, 225, 0) 70%)',
    transform: 'rotate(30deg)',
  },
});

// ------------------------------------------------------------------------------

const SearchPage = () => {
  
  const [allSongs , setSongs]=useState([]);
  
  //life cycle Hook {component mount [] } ,{componment update } , { unmount [],Return function }
  
  const loadSongs=async()=>{
    setSongs(await getSongs('Latest Songs'));

  }
   useEffect(()=>{
      loadSongs();

  },[])

  const getArtistName= async (artistName)=>{
    
    
    setSongs(await getSongs(artistName));
  }
  const[flag,setFlag]=useState(false);
  
  const [song,setPlayerSong]=useState(null)
  const togglePlayer=(flag,songvar)=>{
    setPlayerSong(songvar);
    setFlag(flag);
  }
 const jsx=<>
  
  <Search fn={getArtistName}/>                
 <Songs fn={togglePlayer}allSongs={allSongs}/>
</>
  return (
    <>
       <div className='bg'>
        {flag?<Player fn={togglePlayer} song={song}/>:jsx}
        
        </div>  
    </>
  )
} 

export default SearchPage