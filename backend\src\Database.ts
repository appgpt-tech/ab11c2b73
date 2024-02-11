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
import { ShoppingCartEntity } from "./db/ShoppingCart.entity";
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

    dbConfig.entities = [SettingsEntity, UsersEntity, VendorsEntity, CustomersEntity, InventoryEntity, ProductsEntity, ProductCategoriesEntity, DiscountsEntity, ShoppingCartEntity, OrdersEntity, OrderDetailsEntity, PaymentsEntity, ReviewsEntity, SupportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":1,"name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":54},{"userId":2,"name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":0},{"userId":3,"name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":62},{"userId":4,"name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":61},{"userId":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":69}],"Vendors":[{"vendorId":1,"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":18},{"vendorId":2,"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":90},{"vendorId":3,"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":81},{"vendorId":4,"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":45},{"vendorId":5,"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":87}],"Customers":[{"customerId":1,"email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","defaultShippingAddress":"defaultShippingAddress 1","country":"country 1","phone":"phone 1","cartId":1,"id":70},{"customerId":2,"email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","defaultShippingAddress":"defaultShippingAddress 2","country":"country 2","phone":"phone 2","cartId":2,"id":43},{"customerId":3,"email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","defaultShippingAddress":"defaultShippingAddress 3","country":"country 3","phone":"phone 3","cartId":3,"id":33},{"customerId":4,"email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","defaultShippingAddress":"defaultShippingAddress 4","country":"country 4","phone":"phone 4","cartId":4,"id":42},{"customerId":5,"email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","defaultShippingAddress":"defaultShippingAddress 5","country":"country 5","phone":"phone 5","cartId":5,"id":92}],"Inventory":[{"productId":1,"quantity":1,"lowStockThreshold":1,"id":36},{"productId":2,"quantity":2,"lowStockThreshold":2,"id":56},{"productId":3,"quantity":3,"lowStockThreshold":3,"id":51},{"productId":4,"quantity":4,"lowStockThreshold":4,"id":100},{"productId":5,"quantity":5,"lowStockThreshold":5,"id":7}],"Products":[{"productId":1,"vendorId":1,"name":"name 1","price":0.12,"weight":0.42,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"createDate":"2025-02-01T16:00:25.165Z","stock":1,"id":12},{"productId":2,"vendorId":2,"name":"name 2","price":0.68,"weight":0.35,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"createDate":"2024-11-27T20:15:35.062Z","stock":2,"id":27},{"productId":3,"vendorId":3,"name":"name 3","price":0.85,"weight":0.49,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"createDate":"2024-08-19T00:34:37.343Z","stock":3,"id":58},{"productId":4,"vendorId":4,"name":"name 4","price":0.94,"weight":0.67,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"createDate":"2025-01-14T02:18:41.785Z","stock":4,"id":43},{"productId":5,"vendorId":5,"name":"name 5","price":0.76,"weight":0.14,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"createDate":"2024-02-20T20:28:51.437Z","stock":5,"id":30}],"ProductCategories":[{"categoryId":1,"productId":1,"description":"description 1","id":92},{"categoryId":2,"productId":2,"description":"description 2","id":23},{"categoryId":3,"productId":3,"description":"description 3","id":49},{"categoryId":4,"productId":4,"description":"description 4","id":90},{"categoryId":5,"productId":5,"description":"description 5","id":90}],"Discounts":[{"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.16,"discountPercent":0.21,"id":33},{"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.76,"discountPercent":0.87,"id":34},{"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.63,"discountPercent":0.24,"id":64},{"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.85,"discountPercent":0.98,"id":65},{"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.26,"discountPercent":0.05,"id":96}],"ShoppingCart":[{"cartId":1,"customerId":1,"productId":1,"price":0.56,"quantity":1,"id":95},{"cartId":2,"customerId":2,"productId":2,"price":0.51,"quantity":2,"id":88},{"cartId":3,"customerId":3,"productId":3,"price":0.75,"quantity":3,"id":68},{"cartId":4,"customerId":4,"productId":4,"price":0.44,"quantity":4,"id":98},{"cartId":5,"customerId":5,"productId":5,"price":0.58,"quantity":5,"id":24}],"Orders":[{"orderId":1,"customerId":1,"totalAmount":0.67,"vat":0.09,"productTotalAmount":0.61,"shippingCost":0.6,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-09-12T08:50:57.891Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":96},{"orderId":2,"customerId":2,"totalAmount":0.82,"vat":0.14,"productTotalAmount":0.66,"shippingCost":0.3,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2024-02-09T02:17:24.983Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":10},{"orderId":3,"customerId":3,"totalAmount":0.5,"vat":0.84,"productTotalAmount":0.22,"shippingCost":0.95,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2025-01-11T15:09:47.552Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":44},{"orderId":4,"customerId":4,"totalAmount":0.35,"vat":0.62,"productTotalAmount":0.9,"shippingCost":0.2,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2023-11-12T21:44:59.816Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":59},{"orderId":5,"customerId":5,"totalAmount":0.39,"vat":0.58,"productTotalAmount":0.27,"shippingCost":0.08,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2024-06-21T12:18:22.834Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":93}],"OrderDetails":[{"orderId":1,"productId":1,"price":0.05,"quantity":1,"id":95},{"orderId":2,"productId":2,"price":0.88,"quantity":2,"id":93},{"orderId":3,"productId":3,"price":0.03,"quantity":3,"id":32},{"orderId":4,"productId":4,"price":0.18,"quantity":4,"id":65},{"orderId":5,"productId":5,"price":0.34,"quantity":5,"id":34}],"Payments":[{"paymentId":1,"orderId":1,"amount":0.68,"paymentMethod":"paymentMethod 1","paymentDate":"2023-04-15T22:34:41.219Z","paymentStatus":"paymentStatus 1","id":53},{"paymentId":2,"orderId":2,"amount":0.89,"paymentMethod":"paymentMethod 2","paymentDate":"2023-06-13T00:11:36.650Z","paymentStatus":"paymentStatus 2","id":100},{"paymentId":3,"orderId":3,"amount":0.51,"paymentMethod":"paymentMethod 3","paymentDate":"2023-08-07T01:46:17.528Z","paymentStatus":"paymentStatus 3","id":78},{"paymentId":4,"orderId":4,"amount":0.93,"paymentMethod":"paymentMethod 4","paymentDate":"2025-02-03T07:52:20.502Z","paymentStatus":"paymentStatus 4","id":15},{"paymentId":5,"orderId":5,"amount":0.5,"paymentMethod":"paymentMethod 5","paymentDate":"2024-10-03T22:34:42.114Z","paymentStatus":"paymentStatus 5","id":18}],"Reviews":[{"reviewId":1,"productId":1,"customerId":1,"vendorId":1,"rating":0.29,"reviewDetails":"reviewDetails 1","date":"2025-01-16T18:35:27.676Z","id":43},{"reviewId":2,"productId":2,"customerId":2,"vendorId":2,"rating":0.26,"reviewDetails":"reviewDetails 2","date":"2024-08-17T20:56:56.810Z","id":11},{"reviewId":3,"productId":3,"customerId":3,"vendorId":3,"rating":0.25,"reviewDetails":"reviewDetails 3","date":"2023-07-17T08:01:38.909Z","id":38},{"reviewId":4,"productId":4,"customerId":4,"vendorId":4,"rating":0.95,"reviewDetails":"reviewDetails 4","date":"2025-01-13T07:51:24.504Z","id":10},{"reviewId":5,"productId":5,"customerId":5,"vendorId":5,"rating":0.08,"reviewDetails":"reviewDetails 5","date":"2023-07-05T12:06:55.152Z","id":93}],"SupportTickets":[{"ticketId":1,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-08-13T14:22:53.518Z","resolutionDate":"2023-11-24T16:34:07.608Z","id":60},{"ticketId":2,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2023-08-01T11:41:52.225Z","resolutionDate":"2024-04-11T20:57:58.091Z","id":11},{"ticketId":3,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2023-12-17T21:47:14.390Z","resolutionDate":"2023-11-28T09:47:07.627Z","id":1},{"ticketId":4,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-04-14T20:55:01.422Z","resolutionDate":"2023-08-24T17:43:20.371Z","id":97},{"ticketId":5,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-07-06T06:23:11.336Z","resolutionDate":"2023-11-08T00:05:10.685Z","id":45}]};
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
await this.SeedResource("ShoppingCartEntity", data.ShoppingCart);
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

