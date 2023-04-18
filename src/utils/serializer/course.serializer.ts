import { Course } from 'devu-shared-modules'

import CourseModel from '../../model/course.model'

export function serialize(course: CourseModel): Course {
  return {
    id: course.id,
    name: course.name,
    semester: course.semester,
    number: course.number,
    startDate: course.startDate.toISOString(),
    endDate: course.endDate.toISOString(),
    createdAt: course.createdAt.toISOString(),
    updatedAt: course.updatedAt.toISOString(),
  }
}
