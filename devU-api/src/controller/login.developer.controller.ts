import { Request, Response, NextFunction } from 'express'

import UserService from '../services/user.service'
import AuthService from '../services/auth.service'

import { GenericResponse } from '../utils/apiResponse.utils'
import { refreshCookieOptions } from '../utils/cookie.utils'

export async function callback(req: Request, res: Response, next: NextFunction) {
  try {
    const { email = '', externalId = '' } = req.body

    const { user } = await UserService.ensure({ email, externalId })
    const refreshToken = AuthService.createRefreshToken(user)

    res.cookie('refreshToken', refreshToken, refreshCookieOptions)
    res.status(200).json(new GenericResponse('Login successful'))
  } catch (err) {
    next(err)
  }
}

export default {
  callback,
}
