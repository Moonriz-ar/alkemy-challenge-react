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
