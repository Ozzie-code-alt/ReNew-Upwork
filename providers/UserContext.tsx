'use client';

// UserContext.tsx
import React, { createContext, useState, ReactNode, FC } from 'react';

// Define the shape of the context's value
interface UserContextType {
  userID: string;
  setUserID: React.Dispatch<React.SetStateAction<string>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface CurrentUserProviderProps {
  children: ReactNode;
}

const CurrentUserProvider: FC<CurrentUserProviderProps> = ({ children }) => {
  const [userID, setUserID] = useState<string>('');

  return <UserContext.Provider value={{ userID, setUserID }}>{children}</UserContext.Provider>;
};

export { UserContext, CurrentUserProvider };
