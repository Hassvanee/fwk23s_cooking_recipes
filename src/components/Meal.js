import React from "react";

function Meal({ meal }) {
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
       <h2 className="text-orange-500 font-bold text-2xl text-center py-2">{meal.strMeal}</h2>
       
       
       <img className="w-full h-[200px] object-cover rounded-lg border-none hover:scale-105 duration-300" src={meal.strMealThumb} alt={meal.strMeal} />
        <p className="flex justify-between py-2 px-4"></p>   
       
    </div>
    
  );
}

export default Meal;


     
       