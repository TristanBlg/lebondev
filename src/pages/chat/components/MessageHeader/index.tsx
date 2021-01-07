import React from "react"

import Badge from "../../../../common/Badge"
import * as T from "../../../../@types/global"
import { Container } from "./styledComponents"
import { Text } from "../../../../common/StyledText"
import Box from "../../../../common/Box"

interface Props {
  conversation: T.MessageList
}

export default function MessageHeader({ conversation }: Props) {
  return (
    <Container>
      <Badge
        pictures={conversation.members.map(
          (member) => member.profilePictureUrl
        )}
      />
      <Box ml="0.5rem">
        <Text fontSize="1.125rem" fontWeight="500">
          {conversation.members.map((member) => member.name).join(", ")}
        </Text>
      </Box>
    </Container>
  )
}
