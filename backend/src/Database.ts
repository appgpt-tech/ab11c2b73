//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { ProductsEntity } from "./db/Products.entity";
import { ProductCategoriesEntity } from "./db/ProductCategories.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { OrdersEntity } from "./db/Orders.entity";
import { OrderDetailsEntity } from "./db/OrderDetails.entity";
import { UsersEntity } from "./db/Users.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, ProductsEntity, ProductCategoriesEntity, CustomersEntity, OrdersEntity, OrderDetailsEntity, UsersEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Products":[{"productId":1,"sku":"SKU123","name":"Product 1","price":50,"weight":1,"description":"This is Product 1.","thumbnail":"UrlToThumb1","image":"UrlToImage1","categoryId":1,"createDate":"2021-09-01","stock":100},{"productId":2,"sku":"SKU234","name":"Product 2","price":75,"weight":1.5,"description":"This is Product 2.","thumbnail":"UrlToThumb2","image":"UrlToImage2","categoryId":2,"createDate":"2021-09-02","stock":200},{"productId":3,"sku":"SKU345","name":"Product 3","price":100,"weight":2,"description":"This is Product 3.","thumbnail":"UrlToThumb3","image":"UrlToImage3","categoryId":3,"createDate":"2021-09-03","stock":300}],"ProductCategories":[{"id":1,"categoryDescription":"Electronics"},{"id":2,"categoryDescription":"Clothing"},{"id":3,"categoryDescription":"Sports"}],"Customers":[{"customerId":1,"email":"user1@example.com","password":"password1","name":"User 1"},{"customerId":2,"email":"user2@example.com","password":"password2","name":"User 2"},{"customerId":3,"email":"user3@example.com","password":"password3","name":"User 3"}],"Orders":[{"orderId":1,"customerId":1,"amount":150,"shippingAddress":"Shipping Address 1","orderAddress":"Order Address 1","orderEmail":"order1@example.com","orderDate":"2021-09-05","orderStatus":"Delivered"},{"orderId":2,"customerId":2,"amount":125,"shippingAddress":"Shipping Address 2","orderAddress":"Order Address 2","orderEmail":"order2@example.com","orderDate":"2021-09-06","orderStatus":"Shipped"},{"orderId":3,"customerId":3,"amount":175,"shippingAddress":"Shipping Address 3","orderAddress":"Order Address 3","orderEmail":"order3@example.com","orderDate":"2021-09-07","orderStatus":"Pending"}],"OrderDetails":[{"id":1,"orderId":1,"productId":1,"price":50,"sku":"SKU123","quantity":3},{"id":2,"orderId":2,"productId":2,"price":75,"sku":"SKU234","quantity":2},{"id":3,"orderId":3,"productId":3,"price":100,"sku":"SKU345","quantity":2}],"Users":[{"id":1,"name":"User 1","email":"admin1@example.com","username":"admin1","password":"admin123","role":"Admin","dateCreated":"2021-09-01"},{"id":2,"name":"User 2","email":"admin2@example.com","username":"admin2","password":"admin234","role":"Admin","dateCreated":"2021-09-02"},{"id":3,"name":"User 3","email":"admin3@example.com","username":"admin3","password":"admin345","role":"Admin","dateCreated":"2021-09-03"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("ProductsEntity", data.Products);
await this.SeedResource("ProductCategoriesEntity", data.ProductCategories);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("OrdersEntity", data.Orders);
await this.SeedResource("OrderDetailsEntity", data.OrderDetails);
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

