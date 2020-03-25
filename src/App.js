import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Recipes from "./components/Recipes";

const apiKey = "ebf6a42fb05545d093776da0262716d5";

const App = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async e => {
    e.preventDefault();
    const inputName = e.target.recipeName.value;

    const api_call = await fetch(
      `https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${inputName}&number=15`
    );

    const data = await api_call.json();
    console.log(data.results);

    setRecipes(data.results);

    console.log(recipes);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Recipes Search App </h1>
      </header>
      <Form getRecipes={getRecipes} />
      <Recipes recipes={recipes} />
    </div>
  );
};

export default App;
