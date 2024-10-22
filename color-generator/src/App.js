import React from 'react';
import Header from './components/Header';
import ColorGenerator from './components/ColorGenerator';
import SavedColors from './components/SavedColors';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100">
      <Header />
      <ColorGenerator />
      <SavedColors />
    </div>
  );
};

export default App;
