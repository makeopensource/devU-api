import { getRepository, IsNull } from 'typeorm'

import SubmissionProblemScoreModel from '../model/submissionProblemScore.model'

import { SubmissionProblemScore } from 'devu-shared-modules'

const connect = () => getRepository(SubmissionProblemScoreModel)

export async function create(submissionProblemScore: SubmissionProblemScore) {
  return await connect().save(submissionProblemScore)
}

export async function update(submissionProblemScore: SubmissionProblemScore) {
  const { submissionId, assignmentProblemId, score, feedback, released } = submissionProblemScore
  if (!submissionId) throw new Error('Missing Id')
  return await connect().update(submissionId, { assignmentProblemId, score, feedback, released })
}

export async function _delete(id: number) {
  return await connect().softDelete({ id, deletedAt: IsNull() })
}

export async function retrieve(id: number) {
  return await connect().findOne({ id, deletedAt: IsNull() })
}

export async function list() {
  return await connect().find({ submissionId: submissionId, deletedAt: IsNull() })
}

export default {
  create,
  retrieve,
  update,
  _delete,
  list,
}