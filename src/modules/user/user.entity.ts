import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';

@Entity()
export class User {
  @Index()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 256,
    type: 'varchar',
    default: '',
  })
  firstName: string;

  @Column({
    length: 256,
    type: 'varchar',
    default: '',
  })
  lastName: string;

  @Column({
    type: 'text',
    default: '',
  })
  description: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
