import { Controller, Get } from '@nestjs/common'

@Controller('tasks')
export class TaskController {
  @Get()
  getAllTasks() {
    return [
      {
        id: 1,
        title: '🧪 Оптимизация ML-модели',
        description: 'Ваша задача — улучшить точность модели классификации при помощи Grid Search.',
      },
      {
        id: 2,
        title: '⚙️ Подключение к БД',
        description: 'Настройте подключение к PostgreSQL и выполните простейший SELECT-запрос.',
      },
      {
        id: 3,
        title: '📊 Сбор данных с датчиков',
        description: 'Настройте получение данных по WebSocket с удалённых устройств и отобразите их в виде графика.',
      },
    ]
  }
}
