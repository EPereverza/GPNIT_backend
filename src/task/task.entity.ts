import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

export enum TaskStatus {
  NEW = 'new',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export enum TaskDifficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard',
}

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column({ type: 'text' })
  description_md: string

  @Column({
    type: 'enum',
    enum: TaskStatus,
    default: TaskStatus.NEW,
  })
  status: TaskStatus

  @Column({
    type: 'enum',
    enum: TaskDifficulty,
    default: TaskDifficulty.EASY,
  })
  difficulty: TaskDifficulty

  @Column()
  category: string
}
