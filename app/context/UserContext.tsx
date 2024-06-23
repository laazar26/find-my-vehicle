"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

type CarProblemData = {
  problemDescription: string | number;
  diagnosticsInfo: string | number;
  warningLights: string | number;
};

type UserContextType = {
  userId: string | null;
  setUserId: (id: string) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    let id = localStorage.getItem("user_id");
    if (!id) {
      id = uuidv4();
      localStorage.setItem("user_id", id);
    }
    setUserId(id);
  }, []);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}

function useUser(): UserContextType {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("useUser must be used within a UserProvider");
  return context;
}

export { UserProvider, useUser };
