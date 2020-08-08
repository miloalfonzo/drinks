import React from "react";

const Recipe = ({ recipes }) => {
  return (
    <div>
      <div className="col-md-4 mb-3">
        <div className="card">
          <h2 className="card-header">{recipes.strDrink}</h2>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
