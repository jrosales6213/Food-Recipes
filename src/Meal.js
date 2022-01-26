import React, { useState, useEffect } from "react";

export default function Meal({ meal }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://spoonacular.com/recipeImages/${meal.id}-556x370.${meal.imageType}`
    )
      .then(function (response) {
        setImageUrl(response.url);
      })
      .catch(function (error) {
        console.error(error);
      });
  });

  return (
    // <article>
    //   <h1>{meal.title}</h1>
    //   <img src={imageUrl} alt="recipe" />
    //   <ul className="instructions">
    //     <li>Preparation time: {meal.readyInMinutes} minutes</li>
    //     <li>Number of servings: {meal.servings}</li>
    //   </ul>

    //   <a href={meal.sourceUrl}>Go to Recipe</a>
    // </article>

    <div className="card" >
  <img className="card-img-top" src={imageUrl} alt="recipe"/>
  <div className="card-body">
    <h1>{meal.title}</h1>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <ul>
    <li>Preparation time: {meal.readyInMinutes} minutes</li>
    <li>Number of servings: {meal.servings}</li>
    </ul>
    <a href={meal.sourceUrl}>Go to Recipe</a>
  </div>
</div>
  );
}



