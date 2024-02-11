//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { VendorsEntity } from "./db/Vendors.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { InventoryEntity } from "./db/Inventory.entity";
import { ProductsEntity } from "./db/Products.entity";
import { ProductCategoriesEntity } from "./db/ProductCategories.entity";
import { DiscountsEntity } from "./db/Discounts.entity";
import { ShoppingCartsEntity } from "./db/ShoppingCarts.entity";
import { OrdersEntity } from "./db/Orders.entity";
import { OrderDetailsEntity } from "./db/OrderDetails.entity";
import { PaymentsEntity } from "./db/Payments.entity";
import { ReviewsEntity } from "./db/Reviews.entity";
import { SupportTicketsEntity } from "./db/SupportTickets.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, VendorsEntity, CustomersEntity, InventoryEntity, ProductsEntity, ProductCategoriesEntity, DiscountsEntity, ShoppingCartsEntity, OrdersEntity, OrderDetailsEntity, PaymentsEntity, ReviewsEntity, SupportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"id":41,"name":"name 1","email":"email 1","password":"password 1","role":"role 1"},{"id":26,"name":"name 2","email":"email 2","password":"password 2","role":"role 2"},{"id":49,"name":"name 3","email":"email 3","password":"password 3","role":"role 3"},{"id":62,"name":"name 4","email":"email 4","password":"password 4","role":"role 4"},{"id":51,"name":"name 5","email":"email 5","password":"password 5","role":"role 5"}],"Vendors":[{"id":49,"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1"},{"id":57,"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2"},{"id":79,"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3"},{"id":17,"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4"},{"id":16,"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5"}],"Customers":[{"id":86,"email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","shippingAddress":"shippingAddress 1","country":"country 1","phone":"phone 1"},{"id":4,"email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","shippingAddress":"shippingAddress 2","country":"country 2","phone":"phone 2"},{"id":27,"email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","shippingAddress":"shippingAddress 3","country":"country 3","phone":"phone 3"},{"id":89,"email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","shippingAddress":"shippingAddress 4","country":"country 4","phone":"phone 4"},{"id":73,"email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","shippingAddress":"shippingAddress 5","country":"country 5","phone":"phone 5"}],"Inventory":[{"id":18,"productId":1,"quantity":1,"vendorId":1,"lowStockThreshold":1},{"id":72,"productId":2,"quantity":2,"vendorId":2,"lowStockThreshold":2},{"id":30,"productId":3,"quantity":3,"vendorId":3,"lowStockThreshold":3},{"id":13,"productId":4,"quantity":4,"vendorId":4,"lowStockThreshold":4},{"id":98,"productId":5,"quantity":5,"vendorId":5,"lowStockThreshold":5}],"Products":[{"id":98,"vendorId":1,"name":"name 1","price":0.02,"weight":0.71,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":"category 1","createdDate":"2024-05-12T20:36:47.644Z"},{"id":94,"vendorId":2,"name":"name 2","price":0.8,"weight":0.72,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":"category 2","createdDate":"2023-12-26T11:38:55.409Z"},{"id":14,"vendorId":3,"name":"name 3","price":1,"weight":0.29,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":"category 3","createdDate":"2024-08-15T10:33:47.388Z"},{"id":76,"vendorId":4,"name":"name 4","price":0.16,"weight":0.04,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":"category 4","createdDate":"2025-01-10T03:07:40.839Z"},{"id":97,"vendorId":5,"name":"name 5","price":0.2,"weight":0.7,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":"category 5","createdDate":"2023-11-06T12:07:51.894Z"}],"ProductCategories":[{"id":31,"description":"description 1"},{"id":48,"description":"description 2"},{"id":4,"description":"description 3"},{"id":33,"description":"description 4"},{"id":32,"description":"description 5"}],"Discounts":[{"id":71,"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.16,"discountPercent":0.84},{"id":76,"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.86,"discountPercent":0.45},{"id":49,"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.54,"discountPercent":0.79},{"id":33,"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.03,"discountPercent":0.02},{"id":48,"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.56,"discountPercent":0.55}],"ShoppingCarts":[{"id":60,"customerId":1,"productId":1,"price":0.03,"quantity":1},{"id":97,"customerId":2,"productId":2,"price":0.72,"quantity":2},{"id":27,"customerId":3,"productId":3,"price":0.42,"quantity":3},{"id":59,"customerId":4,"productId":4,"price":0.96,"quantity":4},{"id":17,"customerId":5,"productId":5,"price":0.8,"quantity":5}],"Orders":[{"id":17,"customerId":1,"totalAmount":0.54,"vat":0.53,"productTotalAmount":0.3,"shippingCost":0.64,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-10-27T14:03:25.854Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1"},{"id":34,"customerId":2,"totalAmount":0.94,"vat":0.28,"productTotalAmount":0.82,"shippingCost":0.5,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2024-03-06T06:11:42.291Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2"},{"id":36,"customerId":3,"totalAmount":0.4,"vat":0.35,"productTotalAmount":0.94,"shippingCost":0.37,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2024-10-08T05:22:55.020Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3"},{"id":84,"customerId":4,"totalAmount":0.41,"vat":0.88,"productTotalAmount":0.32,"shippingCost":0.63,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2024-11-22T17:39:28.740Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4"},{"id":52,"customerId":5,"totalAmount":0.79,"vat":0.79,"productTotalAmount":0.47,"shippingCost":0.38,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2023-04-23T20:48:36.551Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5"}],"OrderDetails":[{"id":10,"orderId":1,"productId":1,"price":0.83,"quantity":1},{"id":28,"orderId":2,"productId":2,"price":0.8,"quantity":2},{"id":96,"orderId":3,"productId":3,"price":0.31,"quantity":3},{"id":59,"orderId":4,"productId":4,"price":0.36,"quantity":4},{"id":33,"orderId":5,"productId":5,"price":0.67,"quantity":5}],"Payments":[{"id":84,"orderId":1,"amount":0.28,"paymentMethod":"paymentMethod 1","paymentDate":"2024-04-24T06:45:35.085Z","paymentStatus":"paymentStatus 1"},{"id":76,"orderId":2,"amount":0.4,"paymentMethod":"paymentMethod 2","paymentDate":"2023-05-28T08:55:41.625Z","paymentStatus":"paymentStatus 2"},{"id":1,"orderId":3,"amount":0.33,"paymentMethod":"paymentMethod 3","paymentDate":"2023-04-27T16:34:54.843Z","paymentStatus":"paymentStatus 3"},{"id":66,"orderId":4,"amount":0.72,"paymentMethod":"paymentMethod 4","paymentDate":"2024-10-11T08:38:28.035Z","paymentStatus":"paymentStatus 4"},{"id":25,"orderId":5,"amount":0.04,"paymentMethod":"paymentMethod 5","paymentDate":"2024-05-29T23:07:41.544Z","paymentStatus":"paymentStatus 5"}],"Reviews":[{"id":49,"productId":1,"customerId":1,"vendorId":1,"rating":0.32,"reviewDetails":"reviewDetails 1","date":"2023-11-02T19:43:54.006Z"},{"id":67,"productId":2,"customerId":2,"vendorId":2,"rating":0.57,"reviewDetails":"reviewDetails 2","date":"2024-09-17T09:49:56.909Z"},{"id":62,"productId":3,"customerId":3,"vendorId":3,"rating":0.19,"reviewDetails":"reviewDetails 3","date":"2024-10-10T17:07:58.229Z"},{"id":30,"productId":4,"customerId":4,"vendorId":4,"rating":0.34,"reviewDetails":"reviewDetails 4","date":"2024-11-02T16:47:26.423Z"},{"id":45,"productId":5,"customerId":5,"vendorId":5,"rating":0,"reviewDetails":"reviewDetails 5","date":"2024-11-19T20:33:02.154Z"}],"SupportTickets":[{"id":5,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-05-15T08:18:25.965Z","lastUpdateDate":"2023-08-09T04:20:38.551Z"},{"id":86,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2025-01-27T18:21:11.672Z","lastUpdateDate":"2023-08-10T04:26:20.084Z"},{"id":89,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-02-20T15:39:00.720Z","lastUpdateDate":"2024-10-03T21:40:59.994Z"},{"id":31,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-11-22T17:48:31.927Z","lastUpdateDate":"2024-01-21T05:01:08.373Z"},{"id":90,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-03-18T09:34:24.409Z","lastUpdateDate":"2023-09-14T10:32:11.077Z"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("VendorsEntity", data.Vendors);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("InventoryEntity", data.Inventory);
await this.SeedResource("ProductsEntity", data.Products);
await this.SeedResource("ProductCategoriesEntity", data.ProductCategories);
await this.SeedResource("DiscountsEntity", data.Discounts);
await this.SeedResource("ShoppingCartsEntity", data.ShoppingCarts);
await this.SeedResource("OrdersEntity", data.Orders);
await this.SeedResource("OrderDetailsEntity", data.OrderDetails);
await this.SeedResource("PaymentsEntity", data.Payments);
await this.SeedResource("ReviewsEntity", data.Reviews);
await this.SeedResource("SupportTicketsEntity", data.SupportTickets); 
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

