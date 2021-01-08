import React from "react"

import { render } from "../../../config/jest/utils/testing-utils"
import Input from "./"

describe("Input", () => {
  describe("#render", () => {
    it("should render text input correctly", () => {
      const { getByLabelText } = render(
        <div>
          <label htmlFor="text">Text</label>
          <Input type="text" id="text" />
        </div>
      )

      expect(getByLabelText("Text")).toHaveStyle("padding-left: 1.5rem;")
    })
    it("should render search input correctly", () => {
      const { getByLabelText } = render(
        <div>
          <label htmlFor="search">Search</label>
          <Input type="search" id="search" />
        </div>
      )

      expect(getByLabelText("Search")).toHaveStyle("padding-left: 3rem;")
      expect(getByLabelText("Search")).toHaveStyle(
        "background-image: url(search.svg)"
      )
    })
  })
})
