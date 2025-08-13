import React from "react";

function Box({ name, des, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-5 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-start">
        <img src={image} alt={name} className="w-10 h-10 mb-3" />
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600 text-sm">{des}</p>
      </div>
    </div>
  );
}

export default Box;
