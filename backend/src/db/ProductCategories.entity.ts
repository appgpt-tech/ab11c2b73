//to be autogenerated as template, one per resource
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("ProductCategories")
export class ProductCategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
categoryDescription: string;


}
