import React, { useState } from "react";
import MealList from "./MealList";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const API_KEY =`${process.env.REACT_APP_API_KEY}`



const options = {
  method: "GET",
  url:
    "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate",
  params: {
    timeFrame: "day",
    targetCalories: "2000"
  },
  headers: {
    "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    "x-rapidapi-key": `${API_KEY}`
  }
};

function App() {
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setMealData(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  function handleChange(e) {
    setCalories(e.target.value);
  }
  function Main() {
    return (
    <div className=" hero px-4 py-5 text-center">
      <h1 className="col-lg-6 mx-auto main-text">Find Healthy Recipes</h1>
      <div className="col-lg-6 mx-auto main-text">
      <p className="lead mb-4"> Its difficult to keep track of the calories we eat. This app helps
        you find receipes for each day within your calorie intake.</p>
    </div>
  </div>
    );
  }

  return (
<>
<Main/>
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="Calories (e.g. 2000)"
          onChange={handleChange}
        />
        <p>the number of Calories are: {calories}</p>
        <button onClick={getMealData}>Get Daily Meal Plan</button>
      </section>
      {mealData && <MealList mealData={mealData} />}
    </div>

    </>
  );
}

export default App;



