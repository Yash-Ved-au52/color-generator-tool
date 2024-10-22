import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  generateColor,
  addColor,
  setColorFromPicker,
  setColorFromCode,
} from '../colorSlice';

const ColorGenerator = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.colors.color);
  const [colorCode, setColorCode] = useState('');

  const handleColorCodeChange = (e) => {
    setColorCode(e.target.value);
  };

  const handleSetColorFromCode = () => {
    if (/^#[0-9A-F]{6}$/i.test(colorCode)) {
      dispatch(setColorFromCode(colorCode));
    } else {
      alert('Please enter a valid hex code (e.g. #FF5733).');
    }
  };

  return (
    <div className="p-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {/* Color Preview */}
      <div className="col-span-1 flex flex-col items-center bg-white rounded-lg shadow-lg p-8 space-y-4">
        <div
          className="w-24 h-24 rounded-lg shadow-md"
          style={{ backgroundColor: color }}
        ></div>
        <p className="text-lg font-semibold">{color}</p>
      </div>

      {/* Input for Color Code */}
      <div className="col-span-1 flex flex-col items-center bg-white rounded-lg shadow-lg p-8 space-y-4">
        <input
          type="text"
          placeholder="Enter hex code (e.g. #FF5733)"
          value={colorCode}
          onChange={handleColorCodeChange}
          className="border-2 border-gray-300 rounded-md p-2 w-60 focus:border-indigo-500"
        />
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 transition-all"
          onClick={handleSetColorFromCode}
        >
          Generate from Code
        </button>
      </div>

      {/* Buttons for Color Generation */}
      <div className="col-span-1 flex flex-col items-center bg-white rounded-lg shadow-lg p-8 space-y-4">
        {/* Color Picker */}
        <input
          type="color"
          value={color}
          onChange={(e) => dispatch(setColorFromPicker(e.target.value))}
          className="w-12 h-12 cursor-pointer rounded-md border-2 border-gray-300"
        />
        <button
          className="bg-indigo-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-indigo-700 transition-all"
          onClick={() => dispatch(generateColor())}
        >
          Random Color
        </button>
      </div>

      {/* Save Color Button */}
      <div className="col-span-full flex justify-center">
        <button
          className="bg-green-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-green-700 transition-all"
          onClick={() => dispatch(addColor())}
        >
          Save to Favorites
        </button>
      </div>
    </div>
  );
};

export default ColorGenerator;
