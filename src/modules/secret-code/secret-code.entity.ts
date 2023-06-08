import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { User } from '../user';

@Entity()
export class SecretCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ type: 'int', width: parseInt(process.env.LENGTH_SECRET_CODE, 10) })
  code: number;

  @Column({ type: 'datetime' })
  expiration_date: Date;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
