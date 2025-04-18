import { Injectable } from '@nestjs/common'
import { TaskDto } from './dto/task.dto'

@Injectable()
export class TaskService {
  private tasks: TaskDto[] = [
    { id: 1, 
      title: 'функция сложения на Python', 
      description: 'Написать функцию на языке Python, которая складывает два числа',
      solution: 'def add(a, b):\n    return a + b'},
    { id: 2, 
      title: 'функция вычитания на Python ', 
      description: 'Написать функцию на язке Python, которая вычитает два числа',
      solution: 'def add(a, b):\n    return a + b'},
  ]

  findAll(): TaskDto[] {
    return this.tasks
  }

  findById(id: number): TaskDto | undefined {
    return this.tasks.find(task => task.id === id)
  }
}
