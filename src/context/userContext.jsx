import { createContext, useContext, useEffect, useState } from 'react';

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    setCurrentUser(
      JSON.parse(
        localStorage.getItem(
          'stytch_sdk_state_public-token-test-f7c3a314-6949-489c-98c1-971992543a07'
        )
      )
    );
  }, [currentUser]);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
