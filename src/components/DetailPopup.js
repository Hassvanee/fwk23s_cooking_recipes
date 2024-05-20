import React from "react";

const DetailPopup = ({ meal, onClose }) => {
  // Funktion för att stänga popup när man klickar på backdrop
  const handleBackdropClick = (e) => {
    if (e.target.className.includes('backdrop')) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center backdrop bg-gray-800 bg-opacity-50 z-50" 
      onClick={handleBackdropClick}
    >
      <div className="bg-white p-6 rounded-lg shadow-lg relative">
        <button 
          className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-1 px-2 rounded" 
          onClick={onClose}
        >
          Close
        </button>
        <h2 className="text-2xl font-bold mb-4">{meal.strMeal}</h2>
        <img className="w-full h-64 object-cover mb-4" src={meal.strMealThumb} alt={meal.strMeal} />
        <div className="mt-2">
          <h4 className="text-lg font-medium mb-2">Instructions:</h4>
          {meal.strInstructions.split('\n').map((instr, idx) => (
            <p className="text-sm text-gray-500 mt-2" key={idx}>{instr}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPopup;
