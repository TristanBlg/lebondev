import {
  waitFor,
  fireEvent,
  render,
} from "../../../../../config/jest/utils/testing-utils"
import MessageForm from "./"

describe("MessageForm", () => {
  describe("#isPrivate", () => {
    it("should toggle its icons correctly", async () => {
      const { getByTestId } = render(<MessageForm onSubmit={() => undefined} />)
      expect(getByTestId("public-message-icon")).toBeInTheDocument()

      fireEvent.click(getByTestId("checkbox"))

      await waitFor(() => {
        expect(getByTestId("private-message-icon")).toBeInTheDocument()
      })
    })
  })

  describe("#onSubmit", () => {
    it("should submit the form", async () => {
      const onSubmitSpy = jest.fn()
      const { getByTestId } = render(<MessageForm onSubmit={onSubmitSpy} />)

      fireEvent.click(getByTestId("checkbox"))

      fireEvent.change(getByTestId("textarea"), {
        target: { value: `Lorem\n\nIpsum` },
      })

      fireEvent.keyDown(getByTestId("textarea"), {
        shiftKey: false,
        keyCode: 13,
      })

      await waitFor(() => {
        expect(onSubmitSpy).toHaveBeenCalledWith(`Lorem\n\nIpsum`, true)
      })
    })
  })
})
