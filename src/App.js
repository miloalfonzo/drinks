import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import RecipeList from "./components/RecipeList";

import CatProvider from "./context/CatContext";
import RecProvider from "./context/RecContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CatProvider>
      <RecProvider>
        <ModalProvider>
          <Header />
          <div className="container mt-5">
            <div className="row">
              <Form />
            </div>
            <RecipeList />
          </div>
        </ModalProvider>
      </RecProvider>
    </CatProvider>
  );
}

export default App;
