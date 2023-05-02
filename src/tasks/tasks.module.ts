import { ExecutionContext, Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Task} from './entities/task.entity';
import { ContextIdFactory } from '@nestjs/core';
import { UsersModule } from 'src/users/users.module';


@Module({
  imports: [TypeOrmModule.forFeature([Task]),UsersModule],
  controllers: [TasksController],
  providers: [TasksService]
})
export class TasksModule {}
