import React, { TextareaHTMLAttributes, useEffect, useRef } from "react"

import { Textarea as StyledTextarea } from "./styledComponents"

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  minRows?: number
  maxRows?: number
  isSubmitting?: boolean
}
export default function Textarea({
  onChange,
  rows = 1,
  minRows = 1,
  maxRows = 6,
  isSubmitting = false,
  ...rest
}: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  /**
   *  @TODO
   *  Formik resetForm does not trigger onChange method
   *  The following useEffect resets textarea rows value when the form is submiting
   * */
  useEffect(() => {
    if (isSubmitting && textareaRef.current) {
      textareaRef.current.rows = minRows
    }
  }, [isSubmitting, minRows])

  const handleChange = (event: any) => {
    if (onChange) {
      onChange(event)
    }

    /**
     * @TODO
     * Remove hardcoded values
     * */
    const textareaLineHeight = 19
    const textareaPadding = 28

    if (textareaRef.current) {
      textareaRef.current.rows = minRows
    }

    const currentRows = Math.floor(
      (event.target.scrollHeight - textareaPadding) / textareaLineHeight
    )

    const totalRows = currentRows >= maxRows ? maxRows : currentRows

    if (textareaRef.current) {
      textareaRef.current.rows = totalRows
    }
  }

  return (
    <StyledTextarea
      ref={textareaRef}
      maxLength={1000}
      rows={rows}
      onChange={handleChange}
      {...rest}
    />
  )
}
