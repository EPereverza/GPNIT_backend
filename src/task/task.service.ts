import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Task } from './task.entity'

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,
  ) {}

  findAll(): Promise<Task[]> {
    return this.taskRepo.find()
  }

  async findOne(id: number): Promise<Task> {
    const task = await this.taskRepo.findOne({ where: { id } })
    if (!task) throw new NotFoundException(`Задача с id=${id} не найдена`)
    return task
  }

  async create(task: Partial<Task>): Promise<Task> {
    const newTask = this.taskRepo.create(task)
    return this.taskRepo.save(newTask)
  }
}
