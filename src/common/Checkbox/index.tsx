import React, { InputHTMLAttributes } from "react"
import styled from "styled-components"

const Container = styled.div`
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
`
const Input = styled.input`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  opacity: 0;
  left: 0;
  margin: 0;
  border: 0;
  z-index: 1;
  cursor: pointer;
`

export default function Checkbox(props: InputHTMLAttributes<HTMLInputElement>) {
  const { children, ...rest } = props

  return (
    <Container>
      {props.children}
      <Input data-testid="checkbox" type="checkbox" {...rest} />
    </Container>
  )
}
