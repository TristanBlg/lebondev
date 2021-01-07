import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  box-shadow: 0px 0.125rem 0.375rem 0px
    ${(props) => props.theme.colors.NIGHT["100"]};
`
