import React, { useContext, useState } from "react";
import { CatContext } from "../context/CatContext";
import RecProvider, { RecContext } from "../context/RecContext";

const Form = () => {
  const [search, setSearch] = useState({
    name: "",
    category: ""
  });

  const { cat } = useContext(CatContext);
  const { setSearchc, setConsult } = useContext(RecContext);

  const onChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form
      className="col-12"
      onSubmit={(e) => {
        e.preventDefault();
        setSearchc(search);
        setConsult(true);
      }}
    >
      <fieldset className="text-center">
        <legend>Busca bebidas por categoría o ingrediente</legend>
      </fieldset>
      <div className="row mt-4">
        <div className="col-md-4">
          <input
            name="name"
            className="form-control"
            type="text"
            placeholder="Buscar por ingrediente"
            onChange={onChange}
          />
        </div>
        <div className="col-md-4">
          <select className="form-control" name="category" onChange={onChange}>
            <option value="">--Selecciona categoría</option>
            {cat.map((cate) => (
              <option key={cate.strCategory} value={cate.strCategory}>
                {cate.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Buscar bebidas"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
