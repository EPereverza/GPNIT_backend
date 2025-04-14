import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskModule } from './task/task.module'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: '',
      password: '',
      database: '',
      synchronize: true, // synchronize: true позволит создать таблицу task автоматически при первом запуске
      autoLoadEntities: true,
    }),
    TaskModule,
  ],
})
export class AppModule {}
