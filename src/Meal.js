import React, { useState, useEffect } from "react";
import { Card, CardImg, CardText, CardBody,
  CardTitle,  CardFooter, Button} from 'reactstrap';

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
<Card className="m-2 food-card">
<CardImg variant="top" src={imageUrl} />
<CardBody>
  <CardTitle>{meal.title}</CardTitle>
  <CardText>Preparation time : {meal.readyInMinutes} mins</CardText>
  <CardText>Servings: {meal.servings}</CardText>
</CardBody>
  <Button className="button m-2" href={meal.sourceUrl}> Get Recipe</Button>
</Card>

  );
}


