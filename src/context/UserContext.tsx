import { createContext } from "react";
import { IUser } from "../types/user.types";

interface IUserContext {
  user: IUser | null;
  setUser: (user: IUser) => void;
  singin: (user: IUser) => void;
  singout: () => void;
}

export const UserContext = createContext<IUserContext>({
  user: null,
  setUser: (_user: IUser) => Function,
  singin: (_user: IUser) => Function,
  singout: () => Function,
});
