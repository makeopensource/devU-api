import { serialize } from '../category.serializer'

import CategoryModel from '../../../model/category.model'

import Testing from '../../testing.utils'

let mockCategory: CategoryModel

describe('Category Serializer', () => {
  beforeEach(() => {
    mockCategory = Testing.generateTypeOrm<CategoryModel>(CategoryModel)

    mockCategory.id = 42
    mockCategory.name = 'Project'
    mockCategory.createdAt = new Date()
    mockCategory.updatedAt = new Date()
  })

  describe('Serializing category', () => {
    test('category values exist in the response', () => {
      const expectedResult = serialize(mockCategory)

      expect(expectedResult).toBeDefined()
      expect(expectedResult.id).toEqual(mockCategory.id)
      expect(expectedResult.name).toEqual(mockCategory.name)
    })

    test('Dates are returned as ISO strings', () => {
      const expectedResult = serialize(mockCategory)

      expect(expectedResult).toBeDefined()
      expect(expectedResult.createdAt).toEqual(mockCategory.createdAt.toISOString())
      expect(expectedResult.updatedAt).toEqual(mockCategory.updatedAt.toISOString())
    })
  })
})
