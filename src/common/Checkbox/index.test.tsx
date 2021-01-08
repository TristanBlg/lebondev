import React from "react"

import { render, fireEvent } from "../../../config/jest/utils/testing-utils"
import Checkbox from "./"

describe("Checkbox", () => {
  describe("#render", () => {
    it("should render correctly", () => {
      const { getByTestId } = render(
        <Checkbox>
          <div data-testid="checkbox-children" />
        </Checkbox>
      )

      expect(getByTestId("checkbox-children")).toBeInTheDocument()
      expect(getByTestId("checkbox")).toHaveStyle("opacity: 0;")
    })
  })

  describe("#onClick", () => {
    it("should toggle by clicking on the component", () => {
      const { getByTestId } = render(<Checkbox />)

      expect(getByTestId("checkbox").checked).toBe(false)

      fireEvent.click(getByTestId("checkbox"))

      expect(getByTestId("checkbox").checked).toBe(true)
    })
  })
})
