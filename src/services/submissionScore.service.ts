import { getRepository, IsNull } from 'typeorm'

import SubmissionScoreModel from '../model/submissionScore.model'

import { SubmissionScore } from 'devu-shared-modules'

const connect = () => getRepository(SubmissionScoreModel)

export async function create(submissionScore: SubmissionScore) {
  return await connect().save(submissionScore)
}

export async function update(submissionScore: SubmissionScore) {
  const {
    id,
    submissionId,
    score,
    feedback,
    releasedAt,
  } = submissionScore

  if (!id) throw new Error('Missing Id')

  return await connect().update(id, {
    submissionId,
    score,
    feedback,
    releasedAt,
  })
}

export async function _delete(id: number) {
  return await connect().softDelete({ id, deletedAt: IsNull() })
}

export async function retrieve(id: number) {
  return await connect().findOne({ id, deletedAt: IsNull() })
}

export async function list() {
  return await connect().find({ deletedAt: IsNull() })
}

export default {
  create,
  retrieve,
  update,
  _delete,
  list,
}
