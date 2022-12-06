import { createContext, useContext, useState } from 'react';

export const UiContext = createContext();

export const UiContextProvider = ({ children }) => {
  const [hideNavigation, setHideNavigation] = useState(false);
  return (
    <UiContext.Provider value={{ hideNavigation, setHideNavigation }}>
      {children}
    </UiContext.Provider>
  );
};

export const useUiContext = () => {
  return useContext(UiContext);
};
