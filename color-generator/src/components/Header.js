import React from 'react';

const Header = () => {
  return (
    <header className="w-full p-8 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-lg">
      <h1 className="text-4xl font-bold text-white text-center drop-shadow-md">
        🎨 Color Generator Tool
      </h1>
      <p className="text-center text-white mt-2">
        Generate, choose, and save your favorite colors!
      </p>
    </header>
  );
};

export default Header;
