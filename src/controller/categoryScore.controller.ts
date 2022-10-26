import { Request, Response, NextFunction } from 'express'

import CategoryScoreService from '../services/categoryScore.service'

import { GenericResponse, NotFound, Updated } from '../utils/apiResponse.utils'

import { serialize } from '../utils/serializer/categoryScore.serializer'

export async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const categoryScores = await CategoryScoreService.list()
    const response = categoryScores.map(serialize)

    res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}

export async function detail(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id)
    const categoryScore = await CategoryScoreService.retrieve(id)

    if (!categoryScore) return res.status(404).json(NotFound)

    const response = serialize(categoryScore)

    res.status(200).json(response)
  } catch (err) {
    next(err)
  }
}

export async function post(req: Request, res: Response, next: NextFunction) {
  try {
    const categoryScore = await CategoryScoreService.create(req.body)
    const response = serialize(categoryScore)

    res.status(201).json(response)
  } catch (err) {
    res.status(400).json(new GenericResponse(err.message))
  }
}

export async function put(req: Request, res: Response, next: NextFunction) {
  try {
    req.body.id = parseInt(req.params.id)
    const results = await CategoryScoreService.update(req.body)

    if (!results.affected) return res.status(404).json(NotFound)

    res.status(200).json(Updated)
  } catch (err) {
    next(err)
  }
}

export async function _delete(req: Request, res: Response, next: NextFunction) {
  try {
    const id = parseInt(req.params.id)
    const results = await CategoryScoreService._delete(id)

    if (!results.affected) return res.status(404).json(NotFound)

    res.status(204).send()
  } catch (err) {
    next(err)
  }
}

export default { get, detail, post, put, _delete }