import { httpService } from "../HttpService";
import { ENDPOINTS } from "../../utils/static";
import { IChatRoom, IChatRoomDraft } from "../../types/chatRoom.types"


class ChatRoomService {
    private httpService = httpService;

    getAll = async () => {
        return await this.httpService.request<IChatRoom[]>({
            url: ENDPOINTS.CHATROOMS,
            method: "GET",
        });
    };

    createCHatRoom = async (data: IChatRoomDraft) => {
        return await this.httpService.request<IChatRoomDraft[]>({
            url: ENDPOINTS.CREATECHATROOM,
            method: "POST",
            data
        });
    };
}
export const chatRoomService = new ChatRoomService();