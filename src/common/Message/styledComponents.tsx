import styled, { css } from "styled-components"

const privateMessage = css`
  color: #ffffff;
  background-color: ${(props) => props.theme.colors.NIGHT["900"]};
  filter: blur(3px);

  :hover {
    filter: blur(0);
  }
`
export const Container = styled.div<{ outgoing: boolean; isPrivate: boolean }>`
  background-color: ${(props) =>
    props.outgoing
      ? props.theme.colors.BRAND_PRIMARY
      : props.theme.colors.MUTED};
  color: ${(props) => props.outgoing && "#ffffff"};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  margin-left: ${(props) => props.outgoing && "auto"};

  ${(props) => props.isPrivate && privateMessage}
`
