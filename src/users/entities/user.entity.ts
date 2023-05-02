import { Task } from "src/tasks/entities/task.entity";
import internal from "stream";
import { Column, Entity, PrimaryGeneratedColumn,OneToMany, JoinColumn } from "typeorm";
@Entity({name : 'users'})
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName : string

    @Column()
    lastName : string

    @Column()
    userName : string

    @Column()
    password : string

    @OneToMany(() => Task,(task) => task.user)
    @JoinColumn()
    tasks : Task[]



}
