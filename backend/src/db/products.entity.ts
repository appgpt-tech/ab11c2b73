//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("products")
export class productsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
vendorId: number;

@Column("text",{nullable: true})
name: string;

@Column("real",{nullable: true})
price: number;

@Column("real",{nullable: true})
weight: number;

@Column("text",{nullable: true})
description: string;

@Column("text",{nullable: true})
thumbnail: string;

@Column("text",{nullable: true})
image: string;

@Column("text",{nullable: true})
category: string;

@Column("date",{nullable: true})
createdDate: Date;


}
