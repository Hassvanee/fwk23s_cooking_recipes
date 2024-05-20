import React, { useState } from "react";

const Meal = ({ meal }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleBackdropClick = () => {
    setShowModal(false); // Stäng modalen när backdrop klickas
  };

  const handleModalClick = (e) => {
    e.stopPropagation(); // Förhindra att klickhändelsen sprider sig till backdrop
  };

  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:scale-105 duration-300">
        <img
          className="w-full h-[200px] object-cover rounded-lg border-none"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <h2 className="text-orange-500 font-bold text-2xl text-center py-2">
          {meal.strMeal}
        </h2>
        <button
          className="mt-4 bg-orange-500 border-none text-white font-bold px-8 py-2  hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          onClick={toggleModal}
        >
          View recipe
        </button>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={handleBackdropClick}
        >
          <div
            className="backdrop bg-gray-500 bg-opacity-75"
            onClick={handleModalClick}
          ></div>
          <div className="min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full mx-auto">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg font-medium leading-6 text-gray-900">
                      Recipe
                    </h3>
                    <div className="mt-2">
                      <h4 className="text-lg font-medium mb-2">Ingredients:</h4>
                      <ul>
                        {Object.keys(meal)
                          .filter(key => key.includes('strIngredient') && meal[key])
                          .map((key, index) => (
                            <li key={index} className="text-sm text-gray-500">{meal[key]} - {meal[`strMeasure${key.slice(13)}`] || ''}</li>
                          ))}
                      </ul>
                      <div className="mt-2">
                        <h4 className="text-lg font-medium mb-2">Instructions:</h4>
                        <p className="text-sm text-gray-500">{meal.strInstructions}</p>
                      </div>
                      {meal.strYoutube && (
                        <div className="mt-4">
                          <h4 className="text-lg font-medium mb-2">Video:</h4>
                          <div className="aspect-w-16 aspect-h-9">
                            <iframe className="w-full h-[400px]" src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} title="YouTube video player" allowFullScreen></iframe>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-orange-500 text-base font-medium text-white hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={toggleModal}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Meal;
