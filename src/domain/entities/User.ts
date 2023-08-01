import bcrypt from 'bcrypt';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert, OneToMany } from 'typeorm';
import Vote from './Vote';
import VideoShare from './VideoShare';

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

  @OneToMany(() => Vote, (vote) => vote.user)
    votes: Vote[];

  @OneToMany(() => VideoShare, (videoShare) => videoShare.user)
    videoShares: VideoShare[];


  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async validatePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  };
}