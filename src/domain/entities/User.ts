import bcrypt from 'bcrypt';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({ unique: true })
    email: string;

  @Column()
    password: string;

  @CreateDateColumn()
    createdAt: Date;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  };
}