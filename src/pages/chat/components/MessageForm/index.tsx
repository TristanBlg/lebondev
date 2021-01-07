import React from "react"
import { Field, FieldProps, Formik, FormikErrors } from "formik"

import Input from "../../../../common/Input"
import Box from "../../../../common/Box"
import Checkbox from "../../../../common/Checkbox"

import { ReactComponent as PublicIcon } from "../../public.svg"
import { ReactComponent as PrivateIcon } from "../../private.svg"

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
        resetForm({
          values: { text: "", isPrivate },
        })
      }}
    >
      {({ values, handleChange, handleBlur, handleSubmit }) => (
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
              <Input
                type="text"
                name="text"
                required
                placeholder="Écrivez votre message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
              />
            </Box>
          </Box>
        </form>
      )}
    </Formik>
  )
}
