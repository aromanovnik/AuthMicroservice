import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Index,
} from 'typeorm';
import { IsDate, IsEmail, IsOptional, IsPhoneNumber } from 'class-validator';

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
  firstName = '';

  @Column({
    length: 256,
    type: 'varchar',
    default: '',
  })
  lastName = '';

  @Column({
    type: 'text',
    default: '',
  })
  description = '';

  @Column({
    type: 'text',
    default: '',
  })
  comment = '';

  @Column({
    type: 'datetime',
    nullable: true,
    default: null,
  })
  @IsOptional()
  @IsDate()
  birthdate: string | null = null;

  @Column({
    type: 'number',
    length: 22,
    unique: true,
    nullable: true,
    default: null,
  })
  @IsPhoneNumber()
  phone: number | null = null;

  @Column({
    type: 'varchar',
    length: 250,
    unique: true,
  })
  @IsEmail()
  email: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
