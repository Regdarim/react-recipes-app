import React from "react";

const Form = props => {
  return (
    <form onSubmit={props.getRecipes} style={{ marginBottom: "2rem" }}>
      <input
        type="text"
        name="recipeName"
        placeholder="search recipe"
        className="form__input"
      />
      <button type="submit" className="form__button">
        {" "}
        Search
      </button>
    </form>
  );
};

export default Form;
