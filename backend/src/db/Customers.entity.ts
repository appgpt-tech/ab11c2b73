//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Customers")
export class CustomersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
customerId: string;

@Column({nullable: true})
email: string;

@Column({nullable: true})
password: string;

@Column({nullable: true})
name: string;


}