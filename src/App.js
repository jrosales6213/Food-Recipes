import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import {  Button , Form, FormGroup, Input , Label, Row} from 'reactstrap';
import RecipeComponent from "./RecipeComponent";

const API_KEY =`${process.env.REACT_APP_API_KEY}`;

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
      <h1 className="col-lg-6 mx-auto main-text display-5">Find Healthy Recipes</h1>
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
    <Row className="justify-content-center text-center m-3">
    <Form className="col-sm-4">
            <FormGroup className="p-2">
              <Label className="display-6" for="calories">Enter Daily Calorie Intake</Label>
              <Input className="col-sm-2 mt-3 mb-3" type="number" name="calories"  placeholder="calories (e.g. 2000)"  onChange={handleChange}/>
              <Button className="btn btn-primary" onClick={getMealData}>Get Daily Meal Plan</Button>
            </FormGroup>
    </Form>
    </Row>
          {mealData && <RecipeComponent mealData={mealData} />}
           </>
      );
    }
    
    export default App;