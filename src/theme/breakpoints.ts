export interface BreakpointsArray extends Array<string> {
  small?: string
  medium?: string
  large?: string
  xlarge?: string
}

const breakpoints: BreakpointsArray = ["30rem", "52rem", "64rem", "80rem"]

breakpoints.small = breakpoints[0]
breakpoints.medium = breakpoints[1]
breakpoints.large = breakpoints[2]
breakpoints.xlarge = breakpoints[3]

export default breakpoints
