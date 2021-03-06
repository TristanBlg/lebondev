import React from "react"

import { SingleBadge, MultipleBadge, Circle } from "./styledComponents"

interface Props {
  pictures: string[]
  size?: "small" | "medium" | "big"
}

export default function Badge({ pictures, size = "medium" }: Props) {
  if (pictures.length === 1) {
    return (
      <SingleBadge
        data-testid="single-badge"
        aria-hidden="true"
        size={size}
        background={pictures[0]}
      />
    )
  }

  return (
    <MultipleBadge data-testid="multiple-badge" aria-hidden="true" size={size}>
      <Circle background={pictures[0]} />
      <Circle background={pictures[1]} />
    </MultipleBadge>
  )
}
