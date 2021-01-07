import React, { InputHTMLAttributes } from "react"

import { Input as StyledInput } from "./styledComponents"

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return <StyledInput {...props} />
}
