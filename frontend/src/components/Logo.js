import React from 'react';

const Logo = ({ w, h }) => {
  const logoStyle = {
    position: 'relative',
    width: w,
    height: h,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const imageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  };

  const textStyle = {
    position: 'absolute',
    color: '#007BFF',  // Change text color
    fontSize: '3.5rem',  // Adjust font size
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',  // Adds shadow to make text stand out
    // Add any other styles you like
  };

  return (
    <div style={logoStyle}>
     
      <div style={textStyle}>LHF</div>
    </div>
  );
}

export default Logo;
