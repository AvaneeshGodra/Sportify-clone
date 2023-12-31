import React, { useState } from 'react';
import { Button } from '@mui/material';
import { getSongs } from '../../../shared/services/api-client';
import { Link } from 'react-router-dom';
import { networkOperations } from '../../../shared/services/api-client';

const Likedsongs = ({ s }) => {

  const [sng, setSong] = useState('');

  const play = async () => {
   
    saveToLocalStorage(); // Save the data to localStorage when 'play' is clicked
  };

  const saveToLocalStorage = () => {
      localStorage.setItem("artworkUrl100",s.image);
      localStorage.setItem("artistName",s.artistName);
      localStorage.setItem("trackName",s.songNmae);
      localStorage.setItem("previewUrl",s.previewUrl);
     
      navigateToPlayer(); // After saving to localStorage, navigate to '/player'
   
  };

  const unlike = async () => {
    const email = localStorage.getItem("email");
    const userInfo = {
      email: email,
      songName: s.songNmae
    };
    try {
      const response = await networkOperations.post(
        process.env.REACT_APP_REMOVELIKE,
        userInfo
      ); // backend
    } catch (err) {
      // Handle error
      
    }
    window.location.reload();
  };

  const navigateToPlayer = () => {
    // Navigate to the '/player' route
    // window.location.href = '/player'; // Change to the actual route path
  };

  return (
    <div className="container text-center card mt-4" id="bg" style={{ border: '1px solid #C4FB6D' }}>
      <div className="row mt-2">
        <div className="col-4 mt-2">
          <img src={s.image} alt="Song Artwork" />
        </div>
        <div className="col-4" id="text">
          <p>
            <h5 style={{ color: 'green' }} >
              Artist Name:
            </h5>
            <h6 style={{ color: '#C4FB6D' }}> {s.artistName}</h6>
          </p>
          <p>
            <h5 style={{ color: 'green' }}>
              Song Name :
            </h5>
            <h6 style={{ color: '#C4FB6D' }}> {s.songNmae}</h6>
          </p>
        </div>
        <div className="col-4">
          <Link to='/'>
            <Button color="error" className='mt-5' onClick={unlike} variant="contained">UN LIKE</Button>
          </Link>
          {/* Use play function to fetch data and store */}
          <Link to='/player'>

        
          <Button color="info" className='mt-5' onClick={play} variant="contained">play</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Likedsongs;
