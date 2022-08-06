import React, { createContext, useState, useCallback } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [stringState, setStringState] = useState("");

  const greet = (text) => {
    setStringState(text);
  };

  const contextValue = {
    stringState,
    greet: useCallback((text) => greet(text), []),
  };
  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppProvider;
