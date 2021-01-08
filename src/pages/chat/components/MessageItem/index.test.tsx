import React from "react"

import { render, cleanup } from "../../../../../config/jest/utils/testing-utils"
import MessageHeader from "./"

const message = {
  id: "oihf297ewguvief23rf2243tg32",
  text: "Lorem ipsum",
  isPrivate: false,
  outgoing: true,
  date: "2021-01-06T18:32:05.481Z",
  member: {
    id: "gf923gfh1p3ojfoieqwhifw",
    name: "Jane",
    profilePictureUrl: "/jane.jpg",
  },
}

jest.mock("../../../../common/Badge", () => () => (
  <div data-testid="badge" data-mock="Badge" />
))

describe("MessageHeader", () => {
  afterEach(cleanup)
  describe("#render", () => {
    it("should render outgoing message correctly", () => {
      const { queryByText, queryByTestId } = render(
        <MessageHeader message={message} />
      )

      expect(queryByTestId("badge")).not.toBeInTheDocument()
      expect(queryByText("Jane")).not.toBeInTheDocument()
      expect(queryByText("Lorem ipsum")).toBeInTheDocument()
    })

    it("should render incoming message correctly", () => {
      const incomingMessage = {
        ...message,
        outgoing: false,
      }

      const { queryByText, queryByTestId } = render(
        <MessageHeader message={incomingMessage} />
      )

      expect(queryByTestId("badge")).toBeInTheDocument()
      expect(queryByText("Jane")).toBeInTheDocument()
      expect(queryByText("Lorem ipsum")).toBeInTheDocument()
    })
  })
})
