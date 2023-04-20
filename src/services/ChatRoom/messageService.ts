import { ICreateMessage, IMessage, IMessageDraft } from "../../types/message.types";
import { ENDPOINTS } from "../../utils/static";
import { getItemFormStorage } from "../../utils/storage";
import { httpService } from "../HttpService";

class MessageService {
    private httpService = httpService

    getMessages = async (id: string) => {
        const token = getItemFormStorage("token");
        return await this.httpService.request<IMessage[]>({
            url: `${ENDPOINTS.MESSAGES}/${id}`,
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }

    createMessage = async (data: ICreateMessage) => {
        const token = getItemFormStorage("token");
        return await this.httpService.request<ICreateMessage>({
            url: `${ENDPOINTS.MESSAGES}/create/${data.chatRoom}`,
            method: "POST",
            data,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    }
}
export const messageService = new MessageService();