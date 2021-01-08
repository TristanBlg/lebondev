import { InputHTMLAttributes } from "react"
import styled, { css } from "styled-components"

import search from "./search.svg"

const searchInput = css`
  background-position: left 1rem center;
  background-size: 1rem auto;
  background-repeat: no-repeat;
  background-image: url(${search});
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
  background-color: ${(props) => props.theme.colors.NIGHT["100"]};

  ${(props) => props.type === "search" && searchInput};

  &::placeholder {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.NIGHT["600"]};
  }
`

export default Input
