import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils/queryKeys";
import { messageService } from "../services/ChatRoom/messageService";
import { IMessage } from "../types/message.types";

export const useGetMessagesQuery = (id: string) => {
    return useQuery<IMessage[]>([QUERY_KEYS.MESSAGES], async () => await messageService.getMessages(id))
}
