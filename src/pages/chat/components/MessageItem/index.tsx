import React from "react"

import Message from "../../../../common/Message"
import Badge from "../../../../common/Badge"
import * as T from "../../../../@types/global"
import { Container } from "./styledComponents"
import Box from "../../../../common/Box"

interface Props {
  message: T.Message
}

export default function MessageItem({ message }: Props) {
  return (
    <Container key={message.id}>
      {!message.outgoing && (
        <Box mr="0.5rem">
          <Badge size="small" pictures={[message.member.profilePictureUrl]} />
        </Box>
      )}
      <Message
        text={message.text}
        outgoing={message.outgoing}
        isPrivate={message.isPrivate}
      />
    </Container>
  )
}
