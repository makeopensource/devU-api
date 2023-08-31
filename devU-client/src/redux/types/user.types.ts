import { User, Token } from 'devu-shared-modules'

export type UserState = User & Token

export const SET_USER = 'SET_USER'
export const UPDATE_USER = 'UPDATE_USER'

export interface SetUser {
  type: typeof SET_USER
  payload: UserState
}

export interface UpdateUser {
  type: typeof UPDATE_USER
  payload: Partial<UserState>
}

export type UserActionType = SetUser | UpdateUser
