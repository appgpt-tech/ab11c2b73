//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("reviews")
export class reviewsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
productId: number;

@Column("integer",{nullable: true})
customerId: number;

@Column("integer",{nullable: true})
vendorId: number;

@Column("real",{nullable: true})
rating: number;

@Column("text",{nullable: true})
reviewDetails: string;

@Column("date",{nullable: true})
date: Date;


}
