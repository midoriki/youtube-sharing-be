import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import User from './User';
import Vote, { VoteType } from './Vote';

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

  toJSON(user: User) {
    const upvote = this.votes.filter(v => v.type === VoteType.UP).length;
    const downvote = this.votes.filter(v => v.type === VoteType.DOWN).length;
    const ownVote = this.votes.find(v => v.user.email === user.email);
    return {
      id: this.id,
      videoId: this.videoId,
      url: this.url,
      title: this.title,
      description: this.description,
      author: this.user.email,
      voted: ownVote ? ownVote.type : null,
      upvote,
      downvote
    };
  }
}