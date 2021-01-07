import { TextareaHTMLAttributes } from "react"
import styled from "styled-components"

export const Textarea = styled.textarea<
  TextareaHTMLAttributes<HTMLTextAreaElement>
>`
  resize: none;
  padding: 0.875rem 1.5rem;
  border: 0;
  width: 100%;
  display: block;
  border-radius: 1.5rem;
  outline: 0;
  font-size: 16px;
  line-height: 19px;
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.NIGHT["100"]};

  &::placeholder {
    font-size: 1rem;
    color: ${(props) => props.theme.colors.NIGHT["600"]};
  }
`
