import React from 'react';

const Logo = ({ w = 370, h = 155 }) => {
  // URL to your image
  const imageURL = 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Jacks_logo_2018.svg';

  return (
    <svg width={w} height={h} viewBox="0 0 370 155" className="css-1j8o68f">
      <image
        href={imageURL}
        x="0"
        y="0"
        width="370"
        height="155"
      />
    </svg>
  );
};

export default Logo;
