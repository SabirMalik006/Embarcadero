import React from 'react';

const Picture = () => {
  return (
    <div
      className="
        mt-8 w-full 
        h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]
        bg-center bg-no-repeat
        "
      style={{
        backgroundImage: "url('./image/Frame 1000003371.png')",
      }}
    >
      <style>
        {`
          @media (max-width: 640px) {
            div[style] { background-size: 250% !important; }
          }
          @media (min-width: 641px) and (max-width: 1024px) {
            div[style] { background-size: 200% !important; }
          }
          @media (min-width: 1025px) {
            div[style] { background-size: 100% !important; }
          }
        `}
      </style>
    </div>
  );
};

export default Picture;
