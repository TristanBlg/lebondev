import { BreakpointsArray } from "../theme/breakpoints"
export interface MessageType {
  date: string
  id: string
  isPrivate: boolean
  text: string
  outgoing: boolean
  member: MemberType
}

export interface ContextType {
  authenticated: boolean
  user: MemberType
}

export interface MemberType {
  id: string
  name: string
  profilePictureUrl: string
}

export interface ConversationType {
  id: string
  lastMessageDate: string
  lastMessagePreview: string
  members: MemberType[]
}

export interface MessageListType {
  id: string
  members: MemberType[]
  messages: MessageType[]
}

export interface ThemeType {
  colors: {
    BRAND_PRIMARY: string
    BRAND_SECONDARY: string
    GREY: {
      1000: string
      900: string
      800: string
      700: string
      600: string
      500: string
      400: string
      300: string
      200: string
      100: string
    }
    MINT: {
      1000: string
      900: string
      800: string
      700: string
      600: string
      500: string
      400: string
      300: string
      200: string
      100: string
    }
    NIGHT: {
      1000: string
      900: string
      800: string
      700: string
      600: string
      500: string
      400: string
      300: string
      200: string
      100: string
    }
    YELLOW: {
      1000: string
      900: string
      800: string
      700: string
      600: string
      500: string
      400: string
      300: string
      200: string
      100: string
    }
    BACKGROUND: string
    MUTED: string
    ONLINE: string
    OFFLINE: string
    DANGER: string
    WARNING: string
    INFO: string
    VALID: string
  }
  animations: {
    easing: string
  }
  breakpoints: BreakpointsArray
}
