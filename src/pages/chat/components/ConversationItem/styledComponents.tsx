import styled from "styled-components"

export const Container = styled.li<{ isActive: boolean; onClick: Function }>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  transition: ${(props) => props.theme.animations.easing} 0.2s;
  cursor: pointer;

  background: ${(props) => props.isActive && props.theme.colors.NIGHT["100"]};
  &:hover {
    background: ${(props) => props.theme.colors.NIGHT["100"]};
  }
`
