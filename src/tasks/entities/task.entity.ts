import { User } from 'src/users/entities/user.entity';
import { Column, Entity,PrimaryGeneratedColumn,ManyToOne, JoinColumn } from 'typeorm';
@Entity({name : 'tasks'})
export class Task {
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    title : string
    @Column()
    description : string
    @Column({default : 'in progress',nullable : true})
    status : string
    @ManyToOne(() => User,(user) => user.tasks)
    @JoinColumn()
    user: User



}
