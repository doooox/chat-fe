import { httpService } from "../HttpService";
import { IUser } from "../../types/user.types";
import ISingup from "../../types/singup.types";
import { ENDPOINTS } from "../../utils/static";
import ISingin from "../../types/singin.types";
import { getItemFormStorage } from "../../utils/storage";

class AuthService {
  private httpService = httpService;

  singup = async (data: ISingup) => {
    return await this.httpService.request<IUser>({
      url: ENDPOINTS.SINGUP,
      method: "POST",
      data,
    });
  };

  singin = async (data: ISingin) => {
    return await this.httpService.request<IUser>({
      url: ENDPOINTS.SINGIN,
      method: "POST",
      data,
    });
  };

  singout = async () => {
    const token = getItemFormStorage("token");
    return await this.httpService.request<{ message: string }>({
      url: ENDPOINTS.SINGOUT,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };
}

export const authService = new AuthService();
