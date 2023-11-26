import React, { useEffect, useState } from 'react'
import Search from '../Components/Search'
import Songs from '../Components/Songs.jsx'
import { getSongs } from '../../../shared/services/api-client'
import Player from '../Components/Player'
import { styled, useTheme } from '@mui/material/styles';
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { networkOperations } from '../../../shared/services/api-client'
const SearchPage = () => {
  const navigate = useNavigate();
  const verifylogin = async () => {
    try {
      const data = {
        authtoken: localStorage.getItem("authtoken"),
      };
      const response = await networkOperations.post(
        process.env.REACT_APP_VERIFY,
        data
      );

      if (response.status == 400) {
        navigate('/login');
       
      }
      

      
    } catch (err) {
      // console.log(err);
    }
  };

  useEffect(() => {
    verifylogin();
  }, []);

  const [allSongs , setSongs]=useState([]);
  
  //life cycle Hook {component mount [] } ,{componment update } , { unmount [],Return function }
  const logout=()=>{
    localStorage.removeItem("authtoken");
    localStorage.removeItem("email");
  }
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
  
  {/* <Search fn={getArtistName}/>                 */}
 <Songs fn={togglePlayer}allSongs={allSongs}/>
</>
  return (
    <>
    <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
           <a href="/" class="nav-link px-2 text-secondary">
            <img src="music.png" height='50px'/>
         
          </a>
        </li>
          <li><a href="/about" class="nav-link px-2 text-white mt-3">About</a></li>
        </ul>

       
          {/* <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"/> */}
          <Search fn={getArtistName}/>  
      

        <div class="text-end">
          
          <Link to ='/liked'>
            <button type="button" class="btn btn-outline-light me-2">Liked songs</button>
          </Link>
          <Link to ='/login'>
            <button onClick={logout}type="button" class="btn btn-warning">Logout</button>
          </Link>
          
        </div>
      </div>

      {/* <Link to ='/login'>
      <Button onClick={logout}>logout</Button>
      </Link>
     
      <Link to ='/liked'>
        <Button><b>LIKED SONGS</b></Button>
      </Link> */}
       <div className='bg'>
        {flag?<Player fn={togglePlayer} song={song}/>:jsx}
        </div>  
        <div class="container">
  <footer class="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 my-5 border-top">
    <div class="col mb-3">
      <a href="/" class="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
        {/* <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> */}
      </a>
      <p class="text-body-secondary">©️ 2023</p>
    </div>

    <div class="col mb-3">

    </div>

    <div class="col mb-3">
      <h5>Aniket Singh</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">CSE-2</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">07415002721</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">24</a></li>
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Avaneesh Godra</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">CSE-2</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">06115002721</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">11</a></li>
      
      </ul>
    </div>

    <div class="col mb-3">
      <h5>Aayush Singh</h5>
      <ul class="nav flex-column">
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">CSE-2</a></li>
        <li class="nav-item mb-2"><a href="https://www.youtube.com/watch?v=P8P_S1Fjl_Q" class="nav-link p-0 text-body-secondary">9215002721</a></li>
        <li class="nav-item mb-2"><a href="/" class="nav-link p-0 text-body-secondary">42</a></li>

      </ul>
    </div>
  </footer>
</div>
    </>
  )
} 

export default SearchPage