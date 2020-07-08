import {Column, Entity,PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User{
  @PrimaryGeneratedColumn()
  user : string;

}