import { ExecutionContext, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private userRepository : Repository<User>) {}

  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto)
    return this.userRepository.save(user)
  }

  findAll() {


    return this.userRepository.find();
  }

  findOneById(id:number){

    return this.userRepository.findOneBy({id: id})

  }

  findUserAndTask(id:number){
    return this.userRepository.find({relations: ['tasks'],where : {id : id}})
  }

  findOne(userName: string) {
    return this.userRepository.findOneBy({userName:userName});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
