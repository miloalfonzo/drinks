import React, { useContext, useState } from "react";
import ModalProvider, { ModalContext } from "../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Recipe = ({ recipes }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const { recipeinfo, setIdrecipe, setRecipe } = useContext(ModalContext);
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
                handleOpen();
              }}
            >
              Ver receta
            </button>
            <Modal
              open={open}
              onClose={() => {
                handleClose();
                setRecipe();
                setIdrecipe(null);
              }}
            >
              <div style={modalStyle} className={classes.paper}>
                <h1>{recipeinfo.strDrink}</h1>
                <h3 className="mt-4">Instrucciones</h3>
                <p>{recipeinfo.strInstructions}</p>
                <img
                  className="img-fluid my-4"
                  src={recipeinfo.strDrinkThumb}
                />
              </div>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
