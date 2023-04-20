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
    setItemToStorage("token", JSON.stringify(user.token));
    navigate(ROUTES.MAIN);
  };
  const singout = async () => {
    await authService.singout();
    clearItemFormStorage("user");
    clearItemFormStorage("token");
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
