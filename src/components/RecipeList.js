import React, { useContext } from "react";
import Recipe from "./Recipe";
import { RecContext } from "../context/RecContext";

const RecipeList = () => {
  const { recipe } = useContext(RecContext);

  return (
    <div className="row mt-5">
      {recipe.map((recipes) => (
        <Recipe key="recipe.idDrink" recipes={recipes} />
      ))}
    </div>
  );
};

export default RecipeList;
