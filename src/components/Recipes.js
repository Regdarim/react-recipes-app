import React from "react";
import { Link } from "react-router-dom";

const Recipes = props => (
  <div className="container">
    <div className="row">
      {props.recipes.map(recipe => {
        return (
          <div key={recipe.id} className="col-md-4">
            <div className="recipes__box">
              <img
                src={`https://spoonacular.com/recipeImages/${recipe.image}`}
                alt={recipe.title}
                className="recipe__box"
              />
              <div className="recipe__text">
                <h5 className="recipes__title">
                  {recipe.title < 20
                    ? recipe.title
                    : `${recipe.title.substring(0, 20)}...`}
                </h5>
                <p className="recipes__subtitle">
                  Prep and cook time: <span>{recipe.readyInMinutes}min</span>
                </p>
              </div>
              <button className="recipe__buttons">
                <Link
                  to={{
                    pathname: `/recipe/${recipe.id}`,
                    state: { recipe: recipe.title }
                  }}
                >
                  view recipe
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);
export default Recipes;
