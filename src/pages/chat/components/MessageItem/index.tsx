import React from "react"

import { MessageType } from "../../../../@types/global"
import { Container, MessageContainer } from "./styledComponents"
import Box from "../../../../common/Box"
import Message from "../../../../common/Message"
import Badge from "../../../../common/Badge"
import { Text } from "../../../../common/StyledText"

interface Props {
  message: MessageType
}

export default function MessageItem({ message }: Props) {
  return (
    <Container data-testid="message-item" key={message.id}>
      {!message.outgoing && (
        <Box mr="0.5rem">
          <Badge size="small" pictures={[message.member.profilePictureUrl]} />
        </Box>
      )}
      <MessageContainer outgoing={message.outgoing}>
        {!message.outgoing && (
          <Text mb="0.5rem" light fontSize="0.75rem">
            {message.member.name}
          </Text>
        )}
        <Message
          text={message.text}
          outgoing={message.outgoing}
          isPrivate={message.isPrivate}
        />
      </MessageContainer>
    </Container>
  )
}
