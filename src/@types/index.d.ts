import "styled-components"
import { Theme } from "./global"

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
