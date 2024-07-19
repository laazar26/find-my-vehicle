"use client";

import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

<<<<<<< HEAD
=======
interface CarProp {
  brand: any;
  engineSize: any;
  fuel: any;
  model: any;
  power: any;
  transmission: string;
  year: any;
}

>>>>>>> aa290d2ce565d85a1a5173b12cb643a6976b21fe
type UserContextType = {
  userId: string | null;
  setUserId: (id: string) => void;
  car: CarProp;
  setCar: (car: CarProp) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

function UserProvider({ children }: UserProviderProps) {
  const [userId, setUserId] = useState<string | null>(null);
  const [car, setCar] = useState<any>({});

  useEffect(() => {
    let id = localStorage.getItem("user_id");
    if (!id) {
      id = uuidv4();
      localStorage.setItem("user_id", id);
    }
    setUserId(id);
  }, []);

  return (
    <UserContext.Provider value={{ userId, setUserId, car, setCar }}>
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
