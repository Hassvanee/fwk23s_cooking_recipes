import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slides from "./components/Slides";
import Meal from "./components/Meal";


const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMeals = async (searchQuery) => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl + searchQuery);
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.error("Error fetching meals:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar handleSearch={fetchMeals} />
      <Slides />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
