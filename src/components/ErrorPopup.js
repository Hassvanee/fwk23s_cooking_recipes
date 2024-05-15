import React from "react";

const ErrorPopup = ({ message, setError }) => {
    return (
      <div id="popup-modal" tabIndex="-1" className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-8 relative">
          <button
            type="button"
            className="absolute top-2 right-2 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center"
            onClick={() => setError(null)}
          >
          x</button>
          <div className="mb-3 relative font-normal text-gray-500 dark:text-gray-400 flex justify-center items-center" style={{ minHeight: '100px' }}>
            <h3 className="text-lg">Inga recept hittades. Försök igen med en annan sökning.</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default ErrorPopup;
  