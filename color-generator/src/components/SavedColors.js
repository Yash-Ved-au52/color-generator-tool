import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeColor } from '../colorSlice';

const SavedColors = () => {
  const dispatch = useDispatch();
  const colorList = useSelector((state) => state.colors.colorList);

  return (
    <div className="w-full p-8">
      <h2 className="text-3xl font-bold text-center mb-6">Saved Colors</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {colorList.map((color, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-48"
          >
            <div
              className="w-24 h-24 rounded-full shadow-md"
              style={{ backgroundColor: color }}
            ></div>
            <p className="mt-4 font-medium">{color}</p>
            <button
              className="mt-4 bg-red-500 text-white py-1 px-4 rounded-md shadow-md hover:bg-red-600 transition-all"
              onClick={() => dispatch(removeColor(index))}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedColors;
