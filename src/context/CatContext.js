import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const CatContext = createContext();

const CatProvider = (props) => {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCat = async () => {
      const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

      const cat = await axios.get(url);

      setCat(cat.data.drinks);
    };
    getCat();
  }, []);
  return (
    <CatContext.Provider value={{ cat }}>{props.children}</CatContext.Provider>
  );
};

export default CatProvider;
