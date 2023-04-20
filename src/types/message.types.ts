import { IUser } from "./user.types";

export interface IMessageDraft {
    text: string
}

export interface ICreateMessage extends IMessageDraft {
    chatRoom: string
    user: string
}

export interface IMessage extends IMessageDraft {
    _id: string,
    chatRoom: string,
    user: IUser,
    createdAt: any
}

