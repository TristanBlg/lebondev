import React from "react"

import Logo from "../Logo"
import {
  Container,
  Navbar,
  Nav,
  NavItem,
  HomeIcon,
  ChatIcon,
} from "./styledComponents"

export default function Header() {
  return (
    <Container>
      <Navbar>
        <Logo />
        <Nav>
          <NavItem>
            <HomeIcon aria-hidden="true" aria-label="Home" />
          </NavItem>
          <NavItem>
            <ChatIcon aria-hidden="true" aria-label="Chat" isActive />
          </NavItem>
        </Nav>
      </Navbar>
    </Container>
  )
}
