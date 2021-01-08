import React from "react"

import { render } from "../../../config/jest/utils/testing-utils"
import { theme } from "../../theme"
import Message from "./"

describe("Message", () => {
  describe("#render", () => {
    it("should render correctly", () => {
      const { getByTestId } = render(
        <Message text={`Lorem\n\nIpsum`} outgoing={false} isPrivate={false} />
      )

      expect(getByTestId("message")).toHaveStyle(
        `background-color: ${theme.colors.MUTED}`
      )
    })

    it("should render private message correctly", () => {
      const { getByTestId } = render(
        <Message text={`Lorem\n\nIpsum`} outgoing={false} isPrivate={true} />
      )

      expect(getByTestId("message")).toHaveStyle("filter: blur(3px);")
    })

    it("should render outgoing message correctly", () => {
      const { getByTestId } = render(
        <Message text={`Lorem\n\nIpsum`} outgoing={true} isPrivate={false} />
      )

      expect(getByTestId("message")).toHaveStyle("color: #ffffff")
      expect(getByTestId("message")).toHaveStyle(
        `background-color: ${theme.colors.BRAND_PRIMARY}`
      )
    })
  })
})
