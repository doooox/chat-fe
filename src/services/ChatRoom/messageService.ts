import { ICreateMessage, IMessage, IMessageDraft } from "../../types/message.types";
import { ENDPOINTS } from "../../utils/static";
import { httpService } from "../HttpService";

class MessageService {
    private httpService = httpService

    getMessages = async (id: string) => {
        return await this.httpService.request<IMessage[]>({
            url: `${ENDPOINTS.MESSAGES}/${id}`,
            method: "GET",
        });
    }

    createMessage = async (data: ICreateMessage) => {
        return await this.httpService.request<IMessageDraft>({
            url: `${ENDPOINTS.MESSAGES}/create/${data.chatRoom}`,
            method: "POST",
            data,
        });
    }
}
export const messageService = new MessageService();