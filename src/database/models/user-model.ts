import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm'

import { Todos } from './todo-model';
@Entity()
export class Users extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string

  @Column()
  password: string;

  @Column()
  registered_date: Date

  @OneToMany(() => Todos, todo => todo.user)
  todo: Todos[];
}