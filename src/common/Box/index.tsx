import React from "react"
import styled from "styled-components"
import {
  background,
  BackgroundProps,
  color,
  ColorProps,
  compose,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
} from "styled-system"

export interface BoxProps
  extends SpaceProps,
    LayoutProps,
    PositionProps,
    ColorProps,
    FlexboxProps,
    BackgroundProps,
    TextAlignProps {}

const Box: React.FC<BoxProps> = styled.div`
  ${compose(space, layout, position, color, flexbox, background, textAlign)}
`

export default Box
