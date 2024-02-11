//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class usersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text",{nullable: true})
name: string;

@Column("text",{nullable: true})
email: string;

@Column("text",{nullable: true})
password: string;

@Column("text",{nullable: true})
role: string;


}
