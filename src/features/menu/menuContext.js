import { createContext, useReducer } from "react";

export const MenuContext = createContext(null);
export const MenuDispatchContext = createContext(null);

export function MenuProvider({ children }) {
  const [menuState, dispatch] = useReducer(menuReducer, initialState);

  return (
    <MenuContext.Provider value={menuState}>
      <MenuDispatchContext.Provider value={dispatch}>
        {children}
      </MenuDispatchContext.Provider>
    </MenuContext.Provider>
  );
}

function menuReducer(menu = initialState, action) {
  switch (action.type) {
    case "MENU/ADD":
      return [...menu, action.payload];
    case "MENU/REMOVE":
      return menu.filter((recipe) => recipe.id !== action.payload.id);
    default:
      return menu;
  }
}

const initialState = [];

// Helper action dispatch functions
// Add recipe to menu function
export const addRecipeMenu = (
  recipe,
  menu,
  dispatch,
  Swal,
  veganCount,
  nonVeganCount
) => {
  if (menu.length >= 4) {
    Swal.fire({
      title: "Hold up!",
      text: "The menu should have a maximum of 4 recipes",
      icon: "error",
      confirmButtonText: "Go back",
    });
  } else if (menu.some((item) => item.id === recipe.id)) {
    Swal.fire({
      title: "Hold up!",
      text: "You have already added this recipe",
      icon: "error",
      confirmButtonText: "Go back",
    });
  } else if (menu.length >= 2) {
    if (veganCount === 2 && recipe.vegan) {
      Swal.fire({
        title: "Hold up!",
        text: "The menu should have at most 2 vegan recipes",
        icon: "error",
        confirmButtonText: "Go back",
      });
    } else if (nonVeganCount === 2 && recipe.vegan === false) {
      Swal.fire({
        title: "Hold up!",
        text: "The menu should have at least 2 vegan recipes",
        icon: "error",
        confirmButtonText: "Go back",
      });
    } else {
      dispatch({
        type: "MENU/ADD",
        payload: recipe,
      });
    }
  } else {
    dispatch({
      type: "MENU/ADD",
      payload: recipe,
    });
  }
};

// Remove recipe to menu function
export const removeRecipeMenu = (recipe, dispatch) => {
  dispatch({
    type: "MENU/REMOVE",
    payload: recipe,
  });
};
