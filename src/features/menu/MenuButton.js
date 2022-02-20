import { useContext } from "react";
import { MenuContext } from "../menu/menuContext";
import Button from "react-bootstrap/Button";

const MenuButton = ({ handleShow }) => {
  const menu = useContext(MenuContext);
  return (
    <Button
      variant="danger"
      onClick={handleShow}
      className="position-fixed bottom-0 end-0 m-3 d-flex flex-column align-items-center p-2 text-uppercase shadow"
    >
      <p className="m-0 p-1 fw-bold">See menu</p>
      <p className="m-0 px-1 text-white-50">{menu.length} of 4</p>
    </Button>
  );
};

export default MenuButton;
