import React from 'react'
import Button from '@mui/material/Button';
import { useRef } from 'react';

const Search = ({fn}) => {

  const artist=useRef();  //just like pointer . stores the reference . it is a hook (use)

  const clicked=()=>{
    fn(artist.current.value);
  }
  return (
    <>
      <input ref={artist} type='text' placeholder='Type to Search Here'/>

      <Button onClick={clicked} variant="contained">Search</Button>
      </>
  )
}

export default Search