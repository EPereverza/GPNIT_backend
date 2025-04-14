import { Injectable } from '@nestjs/common'
import { TaskDto } from './dto/task.dto'

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [
    { id: 1, title: 'Сделать логин-форму', description: 'Верстка логина на React' },
    { id: 2, title: 'API задач', description: 'Создать /tasks в NestJS' },
  ]

  findAll(): TaskDto[] {
    return this.tasks
  }

  findById(id: number): TaskDto | undefined {
    return this.tasks.find(task => task.id === id)
  }
}
