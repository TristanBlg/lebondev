import React from "react"

import { render } from "../../../../../config/jest/utils/testing-utils"
import MessageHeader from "./"

const conversation = {
  id: "fhew9idofbeoqwwrhuu13flejqwas",
  members: [
    {
      id: "hifub23g9huewiohfqidqwfjlewf",
      name: "John",
      profilePictureUrl: "/john.jpg",
    },
  ],
  messages: [
    {
      id: "j92380tgfh2biifb438rghfbwii",
      text: "Lorem ipsum",
      isPrivate: false,
      outgoing: false,
      date: "2021-01-06T18:32:05.481Z",
      member: {
        id: "hifub23g9huewiohfqidqwfjlewf",
        name: "John",
        profilePictureUrl: "/john.jpg",
      },
    },
    {
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
    },
  ],
}

jest.mock("../../../../common/Badge", () => () => (
  <div data-testid="badge" data-mock="Badge" />
))

describe("MessageHeader", () => {
  describe("#render", () => {
    it("should render correctly", () => {
      const { getByText, getByTestId } = render(
        <MessageHeader conversation={conversation} />
      )

      expect(getByTestId("badge")).toBeInTheDocument()
      expect(getByText("John")).toBeInTheDocument()
    })
  })
})
