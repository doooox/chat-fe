import { httpService } from "../HttpService";
import { ENDPOINTS } from "../../utils/static";
import { IChatRoom, IChatRoomDraft } from "../../types/chatRoom.types"
import { getItemFormStorage } from "../../utils/storage";


class ChatRoomService {
    private httpService = httpService;

    getAll = async () => {
        const token = getItemFormStorage("token");
        return await this.httpService.request<IChatRoom[]>({
            url: ENDPOINTS.CHATROOMS,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    };

    createCHatRoom = async (data: IChatRoomDraft) => {
        const token = getItemFormStorage("token");
        return await this.httpService.request<IChatRoomDraft[]>({
            url: ENDPOINTS.CREATECHATROOM,
            method: "POST",
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    };
}
export const chatRoomService = new ChatRoomService();