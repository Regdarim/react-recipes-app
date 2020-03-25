import React, { Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiKey = "ebf6a42fb05545d093776da0262716d5";

const baseImageUrl = "https://spoonacular.com/recipeImages/";

// class Recipe extends Component {
//   state = {
//     activeRecipe: []
//   };

//   fetchActiveRecipe = async () => {
//     const recipeTitle = this.props.location.state.recipe;

//     try {
//       const request = await fetch(
//         `https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${recipeTitle}&number=1`
//       );

//       const response = await request.json();

//       console.log(response);
//       console.log(response.results);

//       if (response.results.length !== 0) {
//         this.setState({
//           activeRecipe: response.results[0] //lepiej by bylo na obiektach. do  rozkminienia pozniej jak bede rabil sam i sie na to natkne.
//         });
//       } else {
//         console.error("Cannot fetch data");
//       }

//       console.log(this.state.activeRecipe);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   componentDidMount() {
//     this.fetchActiveRecipe();
//   }

//   render() {
//     const { title, id, image, readyInMinutes } = this.state.activeRecipe;
//     return (
//       <>
//         <div className="container">
//           <div className="active-recipe">
//             <h1>Recipe:</h1>
//             <img
//               className="active-recipe__img"
//               src={`${baseImageUrl}${image}`}
//               alt="Recipe Foto"
//             />
//             <h3 className="active-recipe__title">{title}</h3>
//             <h4 className="active-recipe__subtitle">
//               Prep and cook time: <span>{readyInMinutes}</span>
//             </h4>
//             <p className="active-recipe__description">
//               Description:
//               <span>
//                 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
//                 suscipit corrupti deserunt quisquam saepe esse maxime voluptates
//                 eos cupiditate totam!
//               </span>
//             </p>
//             <button className="active-recipe__button">
//               <Link to="/">Go back to search</Link>
//             </button>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

const Recipe = props => {
  const [activeRecipe, setActiveRecipe] = useState([]);

  const fetchActiveRecipe = async () => {
    const recipeTitle = props.location.state.recipe;

    try {
      const request = await fetch(
        `https://cors-anywhere.herokuapp.com/https://api.spoonacular.com/recipes/search?apiKey=${apiKey}&query=${recipeTitle}&number=1`
      );

      const response = await request.json();

      console.log(response);
      console.log(response.results);

      if (response.results.length !== 0) {
        setActiveRecipe(
          response.results[0] //lepiej by bylo na obiektach. do  rozkminienia pozniej jak bede rabil sam i sie na to natkne.
        );
      } else {
        console.error("Cannot fetch data");
      }

      console.log(activeRecipe);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchActiveRecipe();
    console.log("fetch");
  }, []);

  const { title, id, image, readyInMinutes } = activeRecipe;
  return (
    <>
      <div className="container">
        <div className="active-recipe">
          <h1>Recipe:</h1>
          <img
            className="active-recipe__img"
            src={`${baseImageUrl}${image}`}
            alt="Recipe Foto"
          />
          <h3 className="active-recipe__title">{title}</h3>
          <h4 className="active-recipe__subtitle">
            Prep and cook time: <span>{readyInMinutes}</span>
          </h4>
          <p className="active-recipe__description">
            Description:
            <span>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
              suscipit corrupti deserunt quisquam saepe esse maxime voluptates
              eos cupiditate totam!
            </span>
          </p>
          <button className="active-recipe__button">
            <Link to="/">Go back to search</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Recipe;
