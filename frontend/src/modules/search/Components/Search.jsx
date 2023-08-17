import React from 'react'
import Button from '@mui/material/Button';
import { useRef } from 'react';
import { TextField } from '@mui/material';


const Search = ({fn}) => {

  const artist=useRef();  //just like pointer . stores the reference . it is a hook (use)

  const clicked=()=>{
    fn(artist.current.value);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <a className="navbar-brand" href="#">SPOTIFY</a>
          

              <input ref={artist} className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button onClick={clicked} className="btn btn-outline-success" type="submit">Search</button>
        
      </nav>      
      
      {/* <input ref={artist} type='text' placeholder='Type to Search Here'/>

      <Button onClick={clicked} variant="contained">Search</Button> */}
      
      </>
  )
}

export default Search