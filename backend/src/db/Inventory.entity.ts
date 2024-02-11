//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("Inventory")
export class InventoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("integer",{nullable: true})
productId: number;

@Column("integer",{nullable: true})
quantity: number;

@Column("integer",{nullable: true})
vendorId: number;

@Column("integer",{nullable: true})
lowStockThreshold: number;


}