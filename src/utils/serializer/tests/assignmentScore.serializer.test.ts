import { serialize } from '../assignmentScore.serializer'

import AssignmentModel from '../../../model/assignmentScore.model'

import Testing from '../../testing.utils'
import AssignmentScore from '../../../model/assignmentScore.model'

let mockAssignmentScore = AssignmentModel

describe('AssignmentScore Serializer', () => {
    beforeEach(() => {
        mockAssignmentScore = Testing.generateTypeOrm<AssignmentScoreModel>(AssignmentScoreModel)

        mockAssignmentScore.id = 10
        mockAssignmentScore.assignmentId = 123
        mockAssignmentScore.userId = 789
        mockAssignmentScore.score = 75
        mockAssignmentScore.createdAt = new Date()
        mockAssignmentScore.updatedAt = new Date()
        mockAssignmentScore.deletedAt = new Date()

    })

    describe('Serializing AssignmentScores', () => {
        test('AssignmentScore values exist in the response', () => {
            const expectedResult = serialize(mockAssignmentScore)

            expect(expectedResult).toBeDefined()
            expect(expectedResult.id).toEqual(mockedAssignmentScore.id)
            expect(expectedResult.assignentId).toEqual(mockAssignmentScore.assignmentId)
            expect(expectedResult.userId).toEqual(mockAssignmentScore.userId)
            expect(expectedResult.score).toEqual(mockAssignmentScore.score)
        })

        test('Dates are returned as ISO strings for all assignments', () => {
            const expectedResult = serialize(mockAssignmentScore)

            expect(expectedResult).toBeDefined()

            expect(expectedResult.createdAt).toEqual(mockAssignmentScore.createdAt.toISOString())
            expect(expectedResult.updatedAt).toEqual(mockAssignmentScore.updatedAt.toISOString())
            expect(expectedResult.deletedAt).toEqual(mockAssignmentScore.deletedAt.toISOString())

        })
    })
})