import { Column, CreateDateColumn, Entity, Index, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import User from './User';
import VideoShare from './VideoShare';

export enum VoteType {
  UP = 'up',
  DOWN = 'down'
}

@Entity()
@Index(['user', 'videoShare'], { unique: true })
export default class Vote {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column({
    type: 'enum',
    enum: VoteType
  })
    type: VoteType;

  @ManyToOne(() => User, (user) => user.votes)
    user: User;

  @CreateDateColumn()
    createdAt: Date;

  @ManyToOne(() => VideoShare, (videoShare) => videoShare.votes)
    videoShare: VideoShare;
}