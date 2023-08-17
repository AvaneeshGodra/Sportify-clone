import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import Songs from '../Components/Songs.jsx'
import { getSongs } from '../../../shared/services/api-client'
import Player from '../Components/Player'


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
 const jsx=<><Search fn={getArtistName}/>
 <Songs fn={togglePlayer}allSongs={allSongs}/>
</>
  return (
    <>
        
        {flag?<Player fn={togglePlayer} song={song}/>:jsx}

    </>
  )
} 

export default SearchPage