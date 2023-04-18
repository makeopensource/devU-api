import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  Column,
  JoinColumn,
  ManyToOne,
  Entity,
} from 'typeorm'

import CategoryModel from './category.model'
import CourseModel from './course.model'
import UserModel from './user.model'

@Entity('category_score')
export default class CategoryScore {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date

  @Column({ name: 'course_id' })
  @JoinColumn({ name: 'course_id' })
  @ManyToOne(() => CourseModel)
  courseId: number

  @Column({ name: 'user_id' })
  @JoinColumn({ name: 'user_id' })
  @ManyToOne(() => UserModel)
  userId: number

  @Column({ name: 'category' })
  @JoinColumn({ name: 'category' })
  @ManyToOne(() => CategoryModel)
  category: string

  @Column({ name: 'score', type: 'float' })
  score: number
}
