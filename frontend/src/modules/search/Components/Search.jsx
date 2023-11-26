import React from 'react';
import search from '../../../../src/search-alt-2-svgrepo-com.svg';

const Search = ({ fn }) => {
  const artist = React.useRef();

  const clicked = () => {
    fn(artist.current.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      clicked();
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px 20%', // Adjust padding as needed
      }}
    >
      <div
        className="input-container"
        style={{
          width: '100%',
          maxWidth: '400px', // Adjust the maximum width as needed
          position: 'relative',
        }}
      >
        <input
          ref={artist}
          type="text"
          name="text"
          className="input"
          placeholder="Search..."
          style={{
            width: '100%',
            height: '40px',
            padding: '10px',
            transition: '.2s linear',
            border: '2.5px solid black',
            fontSize: '14px',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            outline: 'none',
          }}
          onKeyPress={handleKeyPress}
        />
        <span
          className="icon"
          style={{
            position: 'absolute',
            right: '10px',
            top: '50%',
            transform: 'translateY(-50%)',
            animation: 'anim 1s linear infinite',
          }}
        >
          <img
            src={search}
            alt="Search Icon"
            onClick={clicked}
            style={{ width: '19px', height: '19px', cursor: 'pointer' }}
          />
        </span>
      </div>
    </div>
  );
};

export default Search;
