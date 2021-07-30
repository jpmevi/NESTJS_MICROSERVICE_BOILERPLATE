import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ name: 'countries' })
export class Example {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 10 })
  status: string;

  @Column({ type: 'varchar', length: 10, unique: true })
  code: string;

  @Exclude()
  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Exclude()
  @DeleteDateColumn({
    name: 'deleted_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  deletedAt: Date;
}
