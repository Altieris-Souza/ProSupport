import { ReactNode } from "react"
import { iAllUsers } from "../../pages/AllUsersPage/types"

export interface iRegister {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export interface iLogin {
  email: string
  password: string
}

export interface iResponseLogin {
  accessToken: string
  user: iUser
}

export interface iUser {
  email: string
  password?: string
  name: string
  bio: string
  image: string
  id: string
  admin?: boolean
  questions: iQuestion[]
  map(arg0: (element: iResponse) => void): ReactNode;
  responses?: {
     map(arg0: (element: iResponse) => void): ReactNode;
    title: string,
    description: string,
    tech: string,
    userId: number,
    id: number,
    length: number
  }
}

export interface iUserContext {
  handleRegister(data: iRegister): Promise<void>
  handleLogin(data: iLogin): Promise<void>
  editUser(id: iUser, body: iUser): Promise<void>
  deleteUser(id: iUser): Promise<void>
  user: iUser
  getAllUsers(): Promise<iAllUsers | undefined>
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  getMyProfile(): Promise<void>
}

export interface iQuestion {
  title: string
  description: string
  tech: string
  userId: string
  id: string
  responses: {
    map(arg0: (element: iResponse) => void): ReactNode;
    title: string,
    description: string,
    tech: string,
    userId: number,
    id: number,
    length: number
  }
  ; 
  user: iUser;
}

interface iResponse {
  description: string,
  id: number,
  questionId: number,
  userId: number,
}