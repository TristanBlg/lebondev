import React from "react"

import {
  fireEvent,
  render,
  waitFor,
} from "../../../config/jest/utils/testing-utils"
import Chat from "./"
import {
  getConversations,
  getMessages,
  sendMessage,
} from "../../services/message"
import { messages } from "../../services/__fixtures__/messages"

jest.mock("./components/MessageForm", () => ({ onSubmit }: any) => (
  <form
    data-testid="message-form"
    data-mock="MessageForm"
    onSubmit={onSubmit}
  />
))
jest.mock("../../services/message", () => ({
  getConversations: jest.fn(),
  getMessages: jest.fn(),
  sendMessage: jest.fn(),
}))

describe("Chat", () => {
  beforeEach(() => {
    // @ts-ignore
    getConversations.mockImplementation(() => Promise.resolve(messages))
    // @ts-ignore
    getMessages.mockImplementation(() => Promise.resolve(messages[0]))
    // @ts-ignore
    sendMessage.mockImplementation(() =>
      Promise.resolve({
        date: "",
        isPrivate: false,
        text: "",
        outgoing: true,
        member: {
          id: "dbcqwkasdbvc2763qrquyidwihas",
          name: "Kadoc",
          profilePictureUrl: "/profilepics/kadoc.jpg",
        },
        id: Math.floor((1 + Math.random()) * 0x100000000)
          .toString(16)
          .substring(1),
      })
    )
  })

  beforeAll(() => {
    if (!HTMLElement.prototype.scrollIntoView) {
      HTMLElement.prototype.scrollIntoView = () => {}
    }
  })

  describe("#render", () => {
    it("should render correctly", async () => {
      const { getByTestId, queryAllByTestId } = render(<Chat />)

      await waitFor(() => {
        expect(queryAllByTestId("conversation-item").length).toEqual(2)
        expect(queryAllByTestId("message-item").length).toEqual(8)
        expect(getByTestId("message-header")).toBeInTheDocument()
        expect(getByTestId("message-form")).toBeInTheDocument()
      })
    })
  })

  describe("#messageAPI", () => {
    it("should fetch conversations & default selected conversation", async () => {
      render(<Chat />)

      await waitFor(() => {
        expect(getConversations).toHaveBeenCalled()
        expect(getMessages).toHaveBeenCalled()
      })
    })
    it("should send a message", async () => {
      const { getByTestId } = render(<Chat />)

      await waitFor(() => {
        fireEvent.submit(getByTestId("message-form"))
        expect(sendMessage).toHaveBeenCalled()
      })
    })
  })
})
