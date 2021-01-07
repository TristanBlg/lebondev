import React, { useContext } from "react"

import Chat from "./pages/chat"
import Header from "./common/Header"
import { LoginContext } from "./helpers/loginContext"
import Box from "./common/Box"

export default function App() {
  const { authenticated } = useContext(LoginContext)

  return (
    <Box display="flex" flexDirection="column">
      <Header />
      {authenticated && <Chat />}
    </Box>
  )
}
