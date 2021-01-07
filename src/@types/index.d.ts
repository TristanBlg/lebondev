import "styled-components"
import { ThemeType } from "./global"

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
