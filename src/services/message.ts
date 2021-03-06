import {
  ConversationType,
  MemberType,
  MessageType,
  MessageListType,
} from "../@types/global"

import { conversations } from "./__fixtures__/conversations"
import { messages } from "./__fixtures__/messages"

export function getConversations(): Promise<ConversationType[]> {
  // return axios.get();

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(conversations)
    }, 200)
  )
}

export function getMessages(id: string): Promise<MessageListType> {
  // return axios.get('');

  return new Promise((resolve) =>
    setTimeout(() => {
      const x = messages.find((el) => el.id === id) || messages[0]
      resolve(x)
    }, 200)
  )
}

export async function sendMessage(
  memberID: MemberType["id"],
  date: MessageType["date"],
  text: MessageType["text"],
  isPrivate: MessageType["isPrivate"]
): Promise<MessageType> {
  // const { data } = await axios.post('', { memberID, date, text, isPrivate });

  return new Promise((resolve) =>
    setTimeout(() => {
      resolve({
        date,
        isPrivate,
        text,
        outgoing: true,
        member: {
          id: "dbcqwkasdbvc2763qrquyidwihas",
          name: "Kadoc",
          profilePictureUrl: "/profilepics/kadoc.jpg",
        },
        id: Math.floor((1 + Math.random()) * 0x100000000)
          .toString(16)
          .substring(1),
      })
    }, 200)
  )
}
