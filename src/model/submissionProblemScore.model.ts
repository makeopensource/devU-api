import {
  JoinColumn,
  ManyToOne,
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm'

import SubmissionModel from './submission.model'
import AssignmentProblemModel from './assignmentProblem.model'

@Entity('submission_problem_scores')
export default class SubmissionProblemScore {
  @PrimaryGeneratedColumn()
  id: number

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date

  @Column({ name: 'submission_id' })
  @JoinColumn({ name: 'submission_id' })
  @ManyToOne(() => SubmissionModel)
  submissionId: number

  @Column({ name: 'assignment_problem_id' })
  @JoinColumn({ name: 'assignment_problem_id' })
  @ManyToOne(() => AssignmentProblemModel)
  assignmentProblemId: number

  @Column({ name: 'score', type: 'float', nullable: true })
  score: number | null

  @Column({ name: 'feedback', type: 'text', nullable: true })
  feedback: string | null

  @Column({ name: 'released_at', nullable: true })
  releasedAt?: Date
}
