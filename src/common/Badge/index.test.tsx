import React from "react"

import { render } from "../../../config/jest/utils/testing-utils"
import Badge from "./"

describe("Badge", () => {
  describe("#render", () => {
    it("should render single Badge correctly", () => {
      const { getByTestId } = render(<Badge pictures={["/lorem.jpg"]} />)

      expect(getByTestId("single-badge")).toBeInTheDocument()
    })

    it("should render multiple Badge correctly", () => {
      const { getByTestId } = render(
        <Badge pictures={["/lorem.jpg", "/ipsum.jpg"]} />
      )

      expect(getByTestId("multiple-badge")).toBeInTheDocument()
    })
  })
})
