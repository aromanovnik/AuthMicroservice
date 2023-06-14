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
@Index(['email', 'password'], { unique: true })
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
  @IsOptional()
  @IsPhoneNumber()
  phone: number | null = null;

  @Index()
  @Column({
    type: 'varchar',
    length: 250,
    unique: true,
  })
  @IsEmail()
  email: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({
    length: 256,
    type: 'varchar',
  })
  password: string;

  @Index()
  @Column({
    length: 256,
    type: 'varchar',
  })
  verifyEmailToken: string;

  @Index()
  @Column({ type: 'boolean', default: false })
  verifiedEmail: boolean;

  @Index()
  @Column({ type: 'jsonb' })
  verifiedEmailsHistory: { date: Date; email: string }[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
