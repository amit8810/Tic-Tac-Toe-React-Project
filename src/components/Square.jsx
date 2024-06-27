import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button className="bg-gray-200 hover:bg-gray-300 text-4xl font-bold p-4 w-full h-full" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;
