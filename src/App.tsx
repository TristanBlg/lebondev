import React, { useContext } from "react"
import styled from "styled-components"

import Chat from "./pages/chat"
import Header from "./common/Header/index"
import { LoginContext } from "./helpers/loginContext"

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

export default function App() {
  const { authenticated } = useContext(LoginContext)

  return (
    <Container>
      <Header />
      {authenticated && <Chat />}
    </Container>
  )
}
