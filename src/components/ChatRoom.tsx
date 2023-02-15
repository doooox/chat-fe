import React from "react";
import { IChatRoom } from "../types/chatRoom.types";

interface Props {
  chatRoom: IChatRoom;
}

const ChatRoom = ({ chatRoom }: Props) => {
  return <div key={chatRoom._id}>{chatRoom.name}</div>;
};

export default ChatRoom;
