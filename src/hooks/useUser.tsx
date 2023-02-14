import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/Auth/AuthService";
import { IUser } from "../types/user.types";
import { ROUTES } from "../utils/static";
import {
  setItemToStorage,
  getItemFormStorage,
  clearItemFormStorage,
} from "../utils/storage";

const useUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser | null>(getItemFormStorage("user"));
  const singin = (user: IUser) => {
    setUser(user);
    setItemToStorage("user", JSON.stringify(user));
    navigate(ROUTES.MAIN);
  };
  const singout = async () => {
    await authService.singout();
    clearItemFormStorage("user");
    setUser(null);
    navigate(ROUTES.SINGIN);
  };
  return {
    user,
    setUser,
    singin,
    singout,
  };
};

export default useUser;
