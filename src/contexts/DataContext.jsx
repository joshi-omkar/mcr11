import React, { createContext, useContext } from "react";

export const DataContextProvider = createContext();

const DataContext = ({ children }) => {
  return (
    <DataContextProvider.Provider value={{}}>
      {children}
    </DataContextProvider.Provider>
  );
};

export default DataContext;

export const useData = () => useContext(DataContextProvider);
