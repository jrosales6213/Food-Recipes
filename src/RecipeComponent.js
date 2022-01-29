import React from "react";
import RecipeCard from "./RecipeCard";
import { Row , ListGroup, ListGroupItem , Col} from "reactstrap";

export default function RecipeComponent({ mealData }) {
  const nutrients = mealData.nutrients;

  return (
    <Col className="p-4">
  <ListGroup className="justify-content-center m-4" horizontal>
    <ListGroupItem>Calories: {nutrients.calories.toFixed(0)}</ListGroupItem>
    <ListGroupItem>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</ListGroupItem>
    <ListGroupItem>Fat: {nutrients.fat.toFixed(0)}</ListGroupItem>
    <ListGroupItem>Protein : {nutrients.protein.toFixed(0)}</ListGroupItem>
  </ListGroup>
    <Row xs={1} md={4} className="justify-content-center m-3">
        {mealData.meals.map((meal) => {
          return <RecipeCard key={meal.id} meal={meal} />;
        })}
  </Row>
    </Col>
  );
}


