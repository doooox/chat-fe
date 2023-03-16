import { IMessage } from "./message.types"

export interface IChatRoomDraft {
    name: string
    messages?: IMessage[]
}

export interface IChatRoom extends IChatRoomDraft {
    _id: string
}

