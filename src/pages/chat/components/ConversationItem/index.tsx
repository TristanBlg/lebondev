import React from "react"

import Badge from "../../../../common/Badge"
import * as T from "../../../../@types/global"
import { Container } from "./styledComponents"
import { Text } from "../../../../common/StyledText"
import Box from "../../../../common/Box"

interface Props {
  conversation: T.Conversation
  isActive: boolean
  onClick: Function
}

export default function ConversationItem({
  conversation,
  isActive,
  onClick,
}: Props) {
  return (
    <Container isActive={isActive} onClick={() => onClick()}>
      <Box flexShrink={0}>
        <Badge
          pictures={conversation.members.map(
            (member) => member.profilePictureUrl
          )}
        />
      </Box>
      <Box minWidth="0" ml="1rem">
        <Text oneLineText>
          {conversation.members.map((member) => member.name).join(", ")}
        </Text>
        <Text oneLineText fontSize="0.875rem" light mt="0.3rem">
          {conversation.lastMessagePreview}
        </Text>
      </Box>
    </Container>
  )
}
