//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Student")
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
studentId: string;

@Column({nullable: true})
name: string;


}