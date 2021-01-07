import React from "react"

import { Container } from "./styledComponents"

interface Props {
  text: string
  outgoing: boolean
  isPrivate: boolean
}

export default function Message({ text, outgoing, isPrivate }: Props) {
  return (
    <Container isPrivate={isPrivate} outgoing={outgoing}>
      {text.split("\n").map((item, i) => (
        <span key={i}>
          {item}
          <br />
        </span>
      ))}
    </Container>
  )
}
