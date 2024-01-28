//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { ProductsEntity } from "./db/Products.entity";
import { ProductcategoriesEntity } from "./db/Productcategories.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { OrdersEntity } from "./db/Orders.entity";
import { OrderdetailsEntity } from "./db/Orderdetails.entity";
import { UsersEntity } from "./db/Users.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, ProductsEntity, ProductcategoriesEntity, CustomersEntity, OrdersEntity, OrderdetailsEntity, UsersEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Products":[{"productId":1,"sku":"PROD1","name":"Product 1","price":100,"weight":50,"description":"This is product 1","thumbnail":"url","image":"url","categoryId":1,"createDate":"2022-01-01","stock":10},{"productId":2,"sku":"PROD2","name":"Product 2","price":200,"weight":70,"description":"This is product 2","thumbnail":"url","image":"url","categoryId":2,"createDate":"2022-01-01","stock":15},{"productId":3,"sku":"PROD3","name":"Product 3","price":150,"weight":60,"description":"This is product 3","thumbnail":"url","image":"url","categoryId":1,"createDate":"2022-01-01","stock":20}],"Productcategories":[{"id":1,"categoryDescription":"Category 1"},{"id":2,"categoryDescription":"Category 2"},{"id":3,"categoryDescription":"Category 3"}],"Customers":[{"customerId":1,"email":"cust1@email.com","password":"password1","name":"Customer 1","lastOrderDate":"2022-01-01"},{"customerId":2,"email":"cust2@email.com","password":"password2","name":"Customer 2","lastOrderDate":"2022-01-02"},{"customerId":3,"email":"cust3@email.com","password":"password3","name":"Customer 3","lastOrderDate":"2022-01-03"}],"Orders":[{"orderId":1,"customerId":1,"amount":100,"shippingAddress":"Address 1","orderAddress":"Address 1","orderEmail":"cust1@email.com","orderDate":"2022-01-01","orderStatus":"Delivered"},{"orderId":2,"customerId":2,"amount":200,"shippingAddress":"Address 2","orderAddress":"Address 2","orderEmail":"cust2@email.com","orderDate":"2022-01-02","orderStatus":"Shipped"},{"orderId":3,"customerId":3,"amount":150,"shippingAddress":"Address 3","orderAddress":"Address 3","orderEmail":"cust3@email.com","orderDate":"2022-01-03","orderStatus":"Processing"}],"Orderdetails":[{"id":1,"orderId":1,"productId":1,"price":100,"sku":"PROD1","quantity":1},{"id":2,"orderId":2,"productId":2,"price":200,"sku":"PROD2","quantity":1},{"id":3,"orderId":3,"productId":3,"price":150,"sku":"PROD3","quantity":1}],"Users":[{"id":1,"name":"User 1","email":"user1@email.com","username":"user1","password":"password1","role":"Admin","dateCreated":"2022-01-01"},{"id":2,"name":"User 2","email":"user2@email.com","username":"user2","password":"password2","role":"User","dateCreated":"2022-01-02"},{"id":3,"name":"User 3","email":"user3@email.com","username":"user3","password":"password3","role":"User","dateCreated":"2022-01-03"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("ProductsEntity", data.Products);
await this.SeedResource("ProductcategoriesEntity", data.Productcategories);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("OrdersEntity", data.Orders);
await this.SeedResource("OrderdetailsEntity", data.Orderdetails);
await this.SeedResource("UsersEntity", data.Users); 
      await this.SeedResource("SettingsEntity", {
        settingname: "isSeeded",
        settingvalue: "true",
      });
    }else{
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository("SettingsEntity");
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: "isSeeded",
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table '+resourceName);
    await repo.upsert(resourceData, ["id"]);
  }
}

