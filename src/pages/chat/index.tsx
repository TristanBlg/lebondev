import React, {
  useCallback,
  ChangeEvent,
  useEffect,
  useState,
  useContext,
  useRef,
} from "react"

import Input from "../../common/Input"
import MessageForm from "./components/MessageForm"
import MessageItem from "./components/MessageItem"
import MessageHeader from "./components/MessageHeader"
import ConversationItem from "./components/ConversationItem"
import * as messageAPI from "../../services/message"
import * as T from "../../@types/global"
import {
  Container,
  MainBlock,
  StartBlock,
  SearchBar,
  ConversationList,
  MessageList,
  MessageListContainer,
  MessageFooter,
} from "./styledComponents"
import { LoginContext } from "../../helpers/loginContext"

export default function Chat() {
  // Get the logged in user info
  const { user } = useContext(LoginContext)

  const [conversations, setConversations] = useState<T.ConversationType[]>()
  const [
    selectedConversation,
    setSelectedConversation,
  ] = useState<T.MessageListType>()
  const [selectedConversationId, setSelectedConversationId] = useState<
    T.MessageListType["id"]
  >()

  const [searchValue, setSearchValue] = useState("")

  const MessageListRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    messageAPI.getConversations().then((response) => {
      setConversations(response)

      // Set the first conversation as default selected conversation
      setSelectedConversationId(response[0].id)
    })
  }, [])

  useEffect(() => {
    // messageAPI.getConversations(searchValue).then((response) => {
    //   setConversations(response)
    // })
  }, [searchValue])

  useEffect(() => {
    if (selectedConversationId) {
      messageAPI.getMessages(selectedConversationId).then((response) => {
        setSelectedConversation(response)
      })
    }
  }, [selectedConversationId])

  useEffect(() => {
    MessageListRef?.current?.scrollIntoView(false)
  }, [selectedConversation])

  const handleSearchChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const {
        target: { value },
      } = event
      setSearchValue(value)
    },
    []
  )

  const handleConversationClick = (id: T.ConversationType["id"]) => () => {
    setSelectedConversationId(id)
  }

  const handleSendMessage = (text: string, isPrivate: boolean) => {
    if (selectedConversation) {
      messageAPI
        .sendMessage(user.id, new Date().toISOString(), text, isPrivate)
        .then((newMessage) => {
          setSelectedConversation({
            ...selectedConversation,
            messages: [...selectedConversation.messages, newMessage],
          })
        })
    }
  }

  return (
    <Container>
      <StartBlock>
        <SearchBar>
          <Input
            onChange={handleSearchChange}
            type="search"
            placeholder="Rechercher un contact"
            aria-label="search"
          />
        </SearchBar>
        <ConversationList>
          {conversations?.map((conversation) => (
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
        <MessageListContainer>
          <MessageList ref={MessageListRef}>
            {selectedConversation?.messages.map((message) => (
              <MessageItem message={message} key={message.id} />
            ))}
          </MessageList>
        </MessageListContainer>
        <MessageFooter>
          <MessageForm onSubmit={handleSendMessage} />
        </MessageFooter>
      </MainBlock>
    </Container>
  )
}
