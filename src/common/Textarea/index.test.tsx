import React from "react"

import { render, fireEvent } from "../../../config/jest/utils/testing-utils"
import Textarea from "./"

describe("Textarea", () => {
  describe("#onChange", () => {
    it("should trigger onChange prop if set", () => {
      const onChangeSpy = jest.fn()
      const { getByTestId } = render(<Textarea onChange={onChangeSpy} />)

      fireEvent.change(getByTestId("textarea"), {
        target: { value: "test" },
      })

      expect(onChangeSpy).toHaveBeenCalled()
    })
  })
})
