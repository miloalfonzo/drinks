import React, { useContext } from "react";
import ModalProvider, { ModalContext } from "../context/ModalContext";

const Recipe = ({ recipes }) => {
  const { setIdrecipe } = useContext(ModalContext);
  return (
    <div>
      <div className="col-md-4 mb-3">
        <div className="card">
          <h2 className="card-header">{recipes.strDrink}</h2>
          <img
            className="card-img-top"
            src={recipes.strDrinkThumb}
            alt={`Imagen de ${recipes.strDrink}`}
          />
          <div className="card-body">
            <button
              type="button"
              className="btn btn-block btn-primary"
              onClick={() => {
                setIdrecipe(recipes.idDrink);
              }}
            >
              Ver receta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
