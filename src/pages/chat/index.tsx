import React, {
  useCallback,
  ChangeEvent,
  useEffect,
  useState,
  useContext,
} from "react"

import Input from "../../common/Input"
import * as messageAPI from "../../services/message"
import * as T from "../../@types/global"
import {
  Container,
  MainBlock,
  StartBlock,
  SearchBar,
  ConversationList,
  MessageList,
  MessageFooter,
} from "./styledComponents"
import MessageForm from "./components/MessageForm"
import MessageItem from "./components/MessageItem"
import MessageHeader from "./components/MessageHeader"
import ConversationItem from "./components/ConversationItem"
import { LoginContext } from "../../helpers/loginContext"

export default function Chat() {
  const [conversations, setConversations] = useState<T.Conversation[]>([])
  const [
    selectedConversation,
    setSelectedConversation,
  ] = useState<T.MessageList>()
  const [selectedConversationId, setSelectedConversationId] = useState<
    T.MessageList["id"]
  >()
  const [filterValue, setFilterValue] = useState("")
  const { user } = useContext(LoginContext)

  useEffect(() => {
    messageAPI.getConversations().then((response) => {
      setConversations(response)
      setSelectedConversationId(response[0].id)
    })
  }, [filterValue])

  useEffect(() => {
    if (selectedConversationId) {
      messageAPI.getMessages(selectedConversationId).then((response) => {
        setSelectedConversation(response)
      })
    }
  }, [selectedConversationId])

  const handleFilterChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = event
      setFilterValue(value)
    },
    []
  )

  const handleConversationClick = (id: T.Conversation["id"]) => () => {
    setSelectedConversationId(id)
  }

  const handleSendMessage = (text: string, isPrivate: boolean) => {
    messageAPI
      .sendMessage(user.id, new Date().toISOString(), text, isPrivate)
      .then((newMessage) => {
        if (selectedConversation) {
          setSelectedConversation({
            ...selectedConversation,
            messages: [...selectedConversation.messages, newMessage],
          })
        }
      })
  }

  return (
    <Container>
      <StartBlock>
        <SearchBar>
          <Input
            onChange={handleFilterChange}
            type="search"
            placeholder="Rechercher un contact"
          />
        </SearchBar>
        <ConversationList>
          {conversations.map((conversation) => (
            <ConversationItem
              key={conversation.id}
              conversation={conversation}
              isActive={conversation.id === selectedConversationId}
              onClick={handleConversationClick(conversation.id)}
            />
          ))}
        </ConversationList>
      </StartBlock>
      <MainBlock>
        {selectedConversation && (
          <MessageHeader conversation={selectedConversation} />
        )}
        <MessageList>
          {selectedConversation?.messages?.map((message) => (
            <MessageItem message={message} key={message.id} />
          ))}
        </MessageList>
        <MessageFooter>
          <MessageForm onSubmit={handleSendMessage} />
        </MessageFooter>
      </MainBlock>
    </Container>
  )
}
