// Meal.jsx
import React from "react";


const Meal = ({ meal }) => {
  return (
   
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:scale-105 duration-300">
        <img className="w-full h-[200px] object-cover rounded-lg border-none" src={meal.strMealThumb} alt={meal.strMeal} />
      
      <h2 className="text-orange-500 font-bold text-2xl text-center py-2">{meal.strMeal}</h2>
      <button className="mt-4 bg-orange-500 border-none text-white font-bold px-8 py-2">View recipe</button>
      </div>
      
    </div>
  );
};

export default Meal;
