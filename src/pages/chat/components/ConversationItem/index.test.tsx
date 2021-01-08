import React from "react"

import {
  render,
  fireEvent,
} from "../../../../../config/jest/utils/testing-utils"
import ConversationItem from "./"
import { theme } from "../../../../theme"

const singleConversation = {
  id: "lknoi21qwbrkjfdsjkfoqieifa",
  lastMessageDate: "2021-01-07T18:05:27.726Z",
  lastMessagePreview: "Lorem ipsum...",
  members: [
    {
      id: "h9f02owyt0g8wruhoerfqwe",
      name: "John",
      profilePictureUrl: "/john.jpg",
    },
  ],
}
const multipleConversation = {
  id: "lknoi21qwbrkjfdsjkfoqieifa",
  lastMessageDate: "2021-01-07T18:05:27.726Z",
  lastMessagePreview: "Lorem ipsum...",
  members: [
    {
      id: "h9f02owyt0g8wruhoerfqwe",
      name: "John",
      profilePictureUrl: "/john.jpg",
    },
    {
      id: "h9f23uiegf9oqehfoehw",
      name: "Jane",
      profilePictureUrl: "/jane.jpg",
    },
  ],
}

jest.mock("../../../../common/Badge", () => () => <div data-mock="Badge" />)

describe("ConversationItem", () => {
  describe("#render", () => {
    it("should render a single conversation correctly", () => {
      const { getByText } = render(
        <ConversationItem
          conversation={singleConversation}
          isActive={false}
          onClick={() => undefined}
        />
      )

      expect(getByText("John")).toBeInTheDocument()
      expect(getByText("Lorem ipsum...")).toBeInTheDocument()
    })

    it("should render a group conversation correctly", () => {
      const { getByText } = render(
        <ConversationItem
          conversation={multipleConversation}
          isActive={false}
          onClick={() => undefined}
        />
      )

      expect(getByText("John, Jane")).toBeInTheDocument()
      expect(getByText("Lorem ipsum...")).toBeInTheDocument()
    })

    it("should render active conversation correctly", () => {
      const { getByTestId } = render(
        <ConversationItem
          conversation={singleConversation}
          isActive={true}
          onClick={() => undefined}
        />
      )

      expect(getByTestId("conversation-item")).toHaveStyle(
        `background-color: ${theme.colors.NIGHT["100"]}`
      )
    })
  })
  describe("#onClick", () => {
    it("should trigger onChange prop if set", () => {
      const onClickSpy = jest.fn()
      const { getByTestId } = render(
        <ConversationItem
          conversation={multipleConversation}
          isActive={false}
          onClick={onClickSpy}
        />
      )

      fireEvent.click(getByTestId("conversation-item"))

      expect(onClickSpy).toHaveBeenCalled()
    })
  })
})
