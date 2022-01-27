import React from "react";
import Meal from "./Meal";
import { Row , ListGroup, ListGroupItem } from "reactstrap";

export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <main>
  <ListGroup className="justify-content-center m-4" horizontal>
    <ListGroupItem>Calories: {nutrients.calories.toFixed(0)}</ListGroupItem>
    <ListGroupItem>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</ListGroupItem>
    <ListGroupItem>Fat: {nutrients.fat.toFixed(0)}</ListGroupItem>
    <ListGroupItem>Protein : {nutrients.protein.toFixed(0)}</ListGroupItem>
  </ListGroup>
    <Row xs={1} md={4} className="justify-content-center m-3">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
  </Row>
    </main>
  );
}


