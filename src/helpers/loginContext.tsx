import React, { createContext } from "react"
import { ContextType } from "../@types/global"

export const LoginContext = createContext<ContextType>({
  authenticated: false,
  user: {
    id: "",
    name: "",
    profilePictureUrl: "",
  },
})

interface Props {
  children: React.ReactNode
}

export const LoginProvider = ({ children }: Props) => {
  const store: ContextType = {
    authenticated: true,
    user: {
      id: "dbcqwkasdbvc2763qrquyidwihas",
      name: "Kadoc",
      profilePictureUrl: "/profilepics/kadoc.jpg",
    },
  }

  return <LoginContext.Provider value={store}>{children}</LoginContext.Provider>
}
