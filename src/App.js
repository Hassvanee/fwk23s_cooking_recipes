import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Slides from "./components/Slides";
import Meal from "./components/Meal";
import ErrorPopup from "./components/ErrorPopup";
import DetailPopup from "./components/DetailPopup";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [meal, setMeal] = useState(null);

  const fetchMeals = async (searchQuery) => {
    setIsLoading(true);
    try {
      const response = await fetch(apiUrl + searchQuery);
      const data = await response.json();
      if (!data.meals) {
        setError("Inga recept hittades. Försök igen med en annan sökning.");
        setMeals([]);
      } else {
        setMeals(data.meals);
        setError(null);
      }
    } catch (error) {
      console.error("Error fetching meals:", error);
      setError("Ett fel uppstod vid hämtning av recept. Försök igen senare.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleMealClose = () => {
    setMeal(null);
  };

  const handleErrorClose = () => {
    setError(null);
  };

  return (
    <div className="App">
      <Navbar handleSearch={fetchMeals} />
      <Slides />
      <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-5 gap-1">
        {meals.map((meal) => (
          <Meal key={meal.idMeal} meal={meal} />
        ))}
      </div>
      <Footer />
      {error && <ErrorPopup message={error} setError={handleErrorClose} />}
      {meal && <DetailPopup meal={meal} onClose={handleMealClose} />}
      
    </div>
  );
}

export default App;
