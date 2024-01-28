//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Activity")
export class ActivityEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
description: string;

@Column({nullable: true})
tutorsName: string;

@Column({nullable: true})
costPerLesson: string;


}
