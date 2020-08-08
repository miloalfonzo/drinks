import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const RecContext = createContext();

const RecProvider = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [searchc, setSearchc] = useState({
    name: "",
    category: ""
  });

  const [consult, setConsult] = useState(false);

  const { name, category } = searchc;

  useEffect(() => {
    if (consult) {
      const getRecipe = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`;

        const result = await axios.get(url);
        //console.log(result.data.drinks);
        setRecipe(result.data.drinks);
      };

      getRecipe();
    }
  }, [searchc]);

  return (
    <RecContext.Provider value={{ setSearchc, setConsult, recipe }}>
      {props.children}
    </RecContext.Provider>
  );
};

export default RecProvider;
