"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

type userContextType = {
  userId: string | null;
  setUserId: (id: string) => void;
};

const UserContext = createContext<userContextType | undefined>(undefined);

type UserProvider = {
  children: ReactNode;
};

function UserProvider({ children }: UserProvider) {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(function () {
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

function useUser(): userContextType {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UseUser must be used within a UserProvider");
  return context;
}

export { UserProvider, useUser };
