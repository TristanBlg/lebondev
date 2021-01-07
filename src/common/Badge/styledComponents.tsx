import styled, { css } from "styled-components"

const big = css`
  height: 5rem;
  width: 5rem;
`
const small = css`
  height: 1.75rem;
  width: 1.75rem;
`
const medium = css`
  height: 3.5rem;
  width: 3.5rem;
`

const size = {
  big,
  medium,
  small,
}

export const Circle = styled.div<{
  background: string
}>`
  background: ${(props) => props.theme.colors.MUTED} no-repeat center / cover;
  background-image: url("${(props) => props.background}");
  border-radius: 50%;
  height: 70%;
  width 70%;
  position: absolute;


  &:first-child {
    top: 0;
    right: 0;
  }
  &:last-child {
    bottom: 0;
    left: 0;
  }
`

export const SingleBadge = styled.div<{
  background: string
  size: "small" | "medium" | "big"
}>`
  position: relative;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.MUTED} no-repeat center / cover;
  background-image: url("${(props) => props.background}");
  ${(props) => props.size && size[props.size]}
`

export const MultipleBadge = styled.div<{
  size: "small" | "medium" | "big"
}>`
  position: relative;
  ${(props) => props.size && size[props.size]}
`
