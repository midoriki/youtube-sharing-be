import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import User from './User';
import Vote from './Vote';

@Entity()
export default class VideoShare {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    videoId: string;

  @Column('text')
    url: string;

  @Column('text')
    title: string;
  
  @Column('text')
    description: string;

  @CreateDateColumn()
    createdAt: Date;

  @ManyToOne(() => User, (user) => user.videoShares)
    user: User;

  @OneToMany(() => Vote, (vote) => vote.videoShare)
    votes: Vote[];
}