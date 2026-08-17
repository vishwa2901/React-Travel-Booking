import { createContext, useState, useContext } from "react";

const TravelContext = createContext();

export function TravelProvider({ children }) {
  const [selectedPackage, setSelectedPackage] = useState(null);

  return (
    <TravelContext.Provider
      value={{
        selectedPackage,
        setSelectedPackage
      }}
    >
      {children}
    </TravelContext.Provider>
  );
}

export function useTravel() {
  return useContext(TravelContext);
}