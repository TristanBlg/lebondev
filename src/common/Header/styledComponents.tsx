import styled, { css } from "styled-components"

import { ReactComponent as Chat } from "./chat.svg"
import { ReactComponent as Home } from "./home.svg"

export const Container = styled.header`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.MUTED};
`
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
`
export const Nav = styled.ul`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`
export const NavItem = styled.li`
  padding: 0 1rem;
  cursor: pointer;
`

const isActiveIcon = css`
  fill: ${(props) => props.theme.colors.BRAND_SECONDARY};
`
export const HomeIcon = styled(Home)<{ isActive?: boolean }>`
  width: 2rem;
  height: 2rem;

  ${(props) => props.isActive && isActiveIcon}
`
export const ChatIcon = styled(Chat)<{ isActive?: boolean }>`
  width: 2rem;
  height: 2rem;

  ${(props) => props.isActive && isActiveIcon}
`
