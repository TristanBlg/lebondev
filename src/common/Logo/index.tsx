import React from "react"
import styled from "styled-components"

export const Container = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.BRAND_PRIMARY};

  span {
    color: ${(props) => props.theme.colors.BRAND_SECONDARY};
  }
`

export default function Logo() {
  return (
    <Container>
      Lebon<span>dev</span>
    </Container>
  )
}
