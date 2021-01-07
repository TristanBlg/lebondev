import styled, { css } from "styled-components"
import { space, SpaceProps, typography, TypographyProps } from "styled-system"

export const MainTitle = styled.h1<SpaceProps>`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.theme.colors.NIGHT["1000"]};
  ${space}
`

export const Title = styled.h2<SpaceProps>`
  height: 1rem;
  width: 1rem;
  background: black;
  color: ${(props) => props.theme.colors.NIGHT["1000"]};
  ${space}
`

interface TextProps extends SpaceProps, TypographyProps {
  light?: boolean
  oneLineText?: boolean
}

const oneLineText = css`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`

export const Text = styled.p<TextProps>`
  color: ${(props) =>
    props.light
      ? props.theme.colors.NIGHT["500"]
      : props.theme.colors.NIGHT["1000"]};
  font-size: "1rem";
  margin: 0;

  ${(props) => props.oneLineText && oneLineText}

  ${space}
  ${typography}
`
