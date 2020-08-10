import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idrecipe, setIdrecipe] = useState(null);
  const [recipeinfo, setRecipe] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if (!idrecipe) return;
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;
      const result = await axios.get(url);
      setRecipe(result.data.drinks[0]);
    };
    getRecipe();
  }, [idrecipe]);

  return (
    <ModalContext.Provider
      value={{
        setIdrecipe,
        recipeinfo,
        setRecipe
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
