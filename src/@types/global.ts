export interface Message {
  date: string
  id: string
  isPrivate: boolean
  text: string
  outgoing: boolean
  member: Member
}

export interface ContextType {
  authenticated: boolean
  user: Member
}

export interface Member {
  id: string
  name: string
  profilePictureUrl: string
}

export interface Conversation {
  id: string
  lastMessageDate: string
  lastMessagePreview: string
  members: Member[]
}

export interface MessageList {
  id: string
  members: Member[]
  messages: Message[]
}

export interface Theme {
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
}
