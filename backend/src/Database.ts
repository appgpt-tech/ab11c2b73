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
    let data: any = {"Products":[{"productId":1,"sku":"SKU1","name":"Product 1","price":10.99,"weight":0.5,"description":"Example product 1","thumbnail":"https://dummyimage.com/1","image":"https://dummyimage.com/1","categoryId":1,"createDate":"2021-10-01","stock":100},{"productId":2,"sku":"SKU2","name":"Product 2","price":12.99,"weight":0.6,"description":"Example product 2","thumbnail":"https://dummyimage.com/2","image":"https://dummyimage.com/2","categoryId":1,"createDate":"2021-10-02","stock":80},{"productId":3,"sku":"SKU3","name":"Product 3","price":15.99,"weight":0.7,"description":"Example product 3","thumbnail":"https://dummyimage.com/3","image":"https://dummyimage.com/3","categoryId":2,"createDate":"2021-10-03","stock":60}],"Productcategories":[{"id":1,"categoryDescription":"Example category 1"},{"id":2,"categoryDescription":"Example category 2"},{"id":3,"categoryDescription":"Example category 3"}],"Customers":[{"customerId":1,"email":"customer1@example.com","password":"password1","name":"Customer 1"},{"customerId":2,"email":"customer2@example.com","password":"password2","name":"Customer 2"},{"customerId":3,"email":"customer3@example.com","password":"password3","name":"Customer 3"}],"Orders":[{"orderId":1,"customerId":1,"amount":10.99,"shippingAddress":"Customer 1 Address","orderAddress":"Customer 1 Address","orderEmail":"customer1@example.com","orderDate":"2021-10-01","orderStatus":"Shipped"},{"orderId":2,"customerId":2,"amount":12.99,"shippingAddress":"Customer 2 Address","orderAddress":"Customer 2 Address","orderEmail":"customer2@example.com","orderDate":"2021-10-01","orderStatus":"Shipped"},{"orderId":3,"customerId":3,"amount":15.99,"shippingAddress":"Customer 3 Address","orderAddress":"Customer 3 Address","orderEmail":"customer3@example.com","orderDate":"2021-10-01","orderStatus":"Delivered"}],"Orderdetails":[{"id":1,"orderId":1,"productId":1,"price":10.99,"sku":"SKU1","quantity":1},{"id":2,"orderId":2,"productId":2,"price":12.99,"sku":"SKU2","quantity":1},{"id":3,"orderId":3,"productId":3,"price":15.99,"sku":"SKU3","quantity":1}],"Users":[{"id":1,"name":"User 1","email":"user1@example.com","username":"user1","password":"password1","role":"Admin","dateCreated":"2021-10-01"},{"id":2,"name":"User 2","email":"user2@example.com","username":"user2","password":"password2","role":"User","dateCreated":"2021-10-01"},{"id":3,"name":"User 3","email":"user3@example.com","username":"user3","password":"password3","role":"User","dateCreated":"2021-10-01"}]};
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

