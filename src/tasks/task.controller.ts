import { Controller, Get, Param } from '@nestjs/common'
import { TaskService } from './task.service'
import { TaskDto } from './dto/task.dto'

@Controller('tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Get()
  findAll(): TaskDto[] {
    return this.taskService.findAll()
  }

  @Get(':id')
  findOne(@Param('id') id: string): TaskDto | undefined {
    return this.taskService.findById(Number(id))
  }
}



// import { Controller, Get } from '@nestjs/common'

// @Controller('tasks')
// export class TaskController {
//   @Get()
//   getAllTasks() {
//     return [
//       {
//         id: 1,
//         title: '🧪 Оптимизация ML-модели',
//         description: 'Ваша задача — улучшить точность модели классификации при помощи Grid Search.',
//       },
//       {
//         id: 2,
//         title: '⚙️ Подключение к БД',
//         description: 'Настройте подключение к PostgreSQL и выполните простейший SELECT-запрос.',
//       },
//       {
//         id: 3,
//         title: '📊 Сбор данных с датчиков',
//         description: 'Настройте получение данных по WebSocket с удалённых устройств и отобразите их в виде графика.',
//       },
//     ]
//   }
// }
