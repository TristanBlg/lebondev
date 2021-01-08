import { InputHTMLAttributes } from "react"
import styled, { css } from "styled-components"

import search from "./search.svg"

const searchInput = css`
  background: url(${search}) no-repeat left 1rem center / 1rem auto;
  padding-left: 3rem;
`
const Input = styled.input<InputHTMLAttributes<HTMLInputElement>>`
  padding: 0.875rem 1.5rem;
  border: 0;
  width: 100%;
  display: block;
  border-radius: 1.5rem;
  outline: 0;
  font-size: 1rem;

  ${(props) => props.type === "search" && searchInput};

  background-color: ${(props) => props.theme.colors.NIGHT["100"]};

  &::placeholder {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.NIGHT["600"]};
  }
`

export default Input
