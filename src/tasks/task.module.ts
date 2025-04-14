import { Module } from '@nestjs/common'
import { TaskController } from './task.controller'
import { TaskService } from './task.service'

@Module({
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}



// import { Module } from '@nestjs/common'
// import { TypeOrmModule } from '@nestjs/typeorm'
// import { Task } from './task.entity'
// import { TaskService } from './task.service'
// import { TaskController } from './task.controller'

// @Module({
//   imports: [TypeOrmModule.forFeature([Task])],
//   providers: [TaskService],
//   controllers: [TaskController],
// })
// export class TaskModule {}
