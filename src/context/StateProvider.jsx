import { createContext, useContext, useState } from 'react';

const StateContext = createContext({});

export const useStateContext = () => useContext(StateContext);

const StateProvider = ({ children }) => {
  const [selectedParts, setSelectedParts] = useState([]);
  const [assembledParts, setAssembledParts] = useState([]);
  const values = {
    selectedParts,
    setSelectedParts,
    assembledParts,
    setAssembledParts,
  };
  return (
    <StateContext.Provider value={values}>{children}</StateContext.Provider>
  );
};
export default StateProvider;
