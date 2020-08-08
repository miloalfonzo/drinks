import React, { createContext, useState } from "react";

export const RecContext = createContext();

const RecProvider = (props) => {
  const [recipe, setRecipe] = useState([]);
  const [searchc, setSearchc] = useState({
    name: "",
    cat: ""
  });

  return (
    <RecContext.Provider value={{ setSearchc }}>
      {props.children}
    </RecContext.Provider>
  );
};

export default RecProvider;
