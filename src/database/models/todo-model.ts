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

  @Column({ default: false })
  status: boolean;

  @Column()
  userId: number;

  @Column()
  created_at: Date

  @ManyToOne(() => Users, user => user.todo)
  user: Users;
}