import { useState } from "react";

import { RecipesProvider } from "./features/recipeSearch/searchRecipeContext";
import { MenuProvider } from "./features/menu/menuContext";

import Menu from "./features/menu/Menu";
import SearchBar from "./features/recipeSearch/SearchBar";
import SearchResults from "./features/recipeSearch/SearchResults";
import MenuButton from "./features/menu/MenuButton";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <MenuProvider>
        <RecipesProvider>
          <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            className="d-flex flex-column"
          >
            <Navbar.Brand>FOUR SEASONS MENU</Navbar.Brand>
          </Navbar>
          <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            className="d-flex flex-column"
          >
            <SearchBar />
          </Navbar>

          <div className="position-relative pb-5">
            <SearchResults />
            <MenuButton handleShow={handleShow} />
            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Menu</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Menu />
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </RecipesProvider>
      </MenuProvider>
    </>
  );
};

export default Home;
