import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "../utils/queryKeys";
import { IChatRoom } from "../types/chatRoom.types"
import { chatRoomService } from "../services/ChatRoom/chatRoomService"


export const useGetChatRoomsQuery = () => {
    return useQuery<IChatRoom[]>([QUERY_KEYS.CHATROOMS], async () => await chatRoomService.getAll())
}



