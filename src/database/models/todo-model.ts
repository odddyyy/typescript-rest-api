import { BaseEntity, Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'

import { Users } from './user-model';

@Entity()
export class Todos extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string

  @Column()
  status: boolean;

  @Column()
  user_id: number;

  @Column()
  created_at: Date

  @ManyToOne(() => Users, user => user.todo)
  user: Users;
}