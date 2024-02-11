//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("supportTickets")
export class supportTicketsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
userId: number;

@Column("integer",{nullable: true})
customerId: number;

@Column("text",{nullable: true})
description: string;

@Column("text",{nullable: true})
status: string;

@Column("date",{nullable: true})
creationDate: Date;

@Column("date",{nullable: true})
resolutionDate: Date;


}
