//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Books")
export class BooksEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
title: string;

@Column({nullable: true})
serial: string;


}
