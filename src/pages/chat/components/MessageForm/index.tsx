import React from "react"
import { Field, FieldProps, Formik, FormikErrors } from "formik"

import Textarea from "../../../../common/Textarea"
import Box from "../../../../common/Box"
import Checkbox from "../../../../common/Checkbox"

import { ReactComponent as PublicIcon } from "./public.svg"
import { ReactComponent as PrivateIcon } from "./private.svg"

interface Props {
  onSubmit: Function
}

export default function MessageForm({ onSubmit }: Props) {
  return (
    <Formik
      initialValues={{ text: "", isPrivate: false }}
      validate={(values) => {
        const errors: FormikErrors<{
          text: string
        }> = {}
        if (!values.text) {
          errors.text = "Required"
        }
        return errors
      }}
      onSubmit={({ text, isPrivate }, { setSubmitting, resetForm }) => {
        onSubmit(text, isPrivate)

        setSubmitting(false)

        // Reset Text value only
        resetForm({
          values: { text: "", isPrivate },
        })
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Box display="flex" alignItems="center">
            <Box mr="0.5rem">
              <Field name="isPrivate">
                {({ field }: FieldProps) => (
                  <Checkbox {...field}>
                    {field.value ? (
                      <PrivateIcon
                        aria-hidden="true"
                        aria-label="Private message"
                      />
                    ) : (
                      <PublicIcon
                        aria-hidden="true"
                        aria-label="Public message"
                      />
                    )}
                  </Checkbox>
                )}
              </Field>
            </Box>
            <Box flex="1">
              <Field name="text">
                {({
                  field,
                  form: { submitForm, isSubmitting },
                }: FieldProps) => {
                  // Submit the form by pressing Enter
                  const onEnterPress = (e: any) => {
                    if (e.keyCode === 13 && e.shiftKey === false) {
                      e.preventDefault()
                      submitForm()
                    }
                  }

                  return (
                    <Textarea
                      {...field}
                      required
                      placeholder="Écrivez votre message"
                      isSubmitting={isSubmitting}
                      rows={1}
                      maxRows={6}
                      onKeyDown={onEnterPress}
                    />
                  )
                }}
              </Field>
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  )
}
