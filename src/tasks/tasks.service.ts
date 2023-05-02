import { ExecutionContext, Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { InjectRepository} from '@nestjs/typeorm';
import { Task } from './entities/task.entity';
import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
@Injectable()
export class TasksService {
  constructor(@InjectRepository(Task) private taskRepository : Repository<Task>,private usersService: UsersService) {}


  async create(id:number,createTaskDto: CreateTaskDto) {

    const user = await this.usersService.findOneById(id)
   
    const newTask = this.taskRepository.create({...createTaskDto,user: user})
    return this.taskRepository.save(newTask)

  
  }

 async findAll(id : number) {
    
    const user = await this.usersService.findUserAndTask(id)
    const userTasks =  user[0].tasks
    return userTasks
  }


  async update(id: number, updateTaskDto: UpdateTaskDto) {

     await this.taskRepository.update({id : id}, {...updateTaskDto})

    
  }

  remove(id: number) {
    return this.taskRepository.delete(id)
  }
}
