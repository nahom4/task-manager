import { Controller, Get, Post, Body, Patch, Param, Delete,UseGuards, Req } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { AuthGuard } from 'src/auth/authGuard';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}
  @UseGuards(AuthGuard)
  @Post()
  create(@Req() req,@Body() createTaskDto: CreateTaskDto) {
    const id = req['user'].sub
    return this.tasksService.create(id,createTaskDto);
  }
  
  @UseGuards(AuthGuard)
  @Get()
  findAll(@Req() req) {
    const id = req['user'].sub
    return this.tasksService.findAll(id);
  }



  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    
    return this.tasksService.update(+id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tasksService.remove(+id);
  }
}
