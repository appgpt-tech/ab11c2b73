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
    let data: any = {"Users":[{"userId":1,"name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":15},{"userId":2,"name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":61},{"userId":3,"name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":100},{"userId":4,"name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":41},{"userId":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":36}],"Vendors":[{"vendorId":1,"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":77},{"vendorId":2,"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":6},{"vendorId":3,"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":89},{"vendorId":4,"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":69},{"vendorId":5,"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":25}],"Customers":[{"customerId":1,"email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","defaultShippingAddress":"defaultShippingAddress 1","country":"country 1","phone":"phone 1","cartId":1,"id":14},{"customerId":2,"email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","defaultShippingAddress":"defaultShippingAddress 2","country":"country 2","phone":"phone 2","cartId":2,"id":94},{"customerId":3,"email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","defaultShippingAddress":"defaultShippingAddress 3","country":"country 3","phone":"phone 3","cartId":3,"id":65},{"customerId":4,"email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","defaultShippingAddress":"defaultShippingAddress 4","country":"country 4","phone":"phone 4","cartId":4,"id":88},{"customerId":5,"email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","defaultShippingAddress":"defaultShippingAddress 5","country":"country 5","phone":"phone 5","cartId":5,"id":64}],"Inventory":[{"productId":1,"quantity":1,"lowStockThreshold":1,"id":87},{"productId":2,"quantity":2,"lowStockThreshold":2,"id":33},{"productId":3,"quantity":3,"lowStockThreshold":3,"id":31},{"productId":4,"quantity":4,"lowStockThreshold":4,"id":79},{"productId":5,"quantity":5,"lowStockThreshold":5,"id":28}],"Products":[{"productId":1,"vendorId":1,"name":"name 1","price":0.31,"weight":0.44,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"createDate":"2023-12-23T04:52:39.950Z","stock":1,"id":49},{"productId":2,"vendorId":2,"name":"name 2","price":0.83,"weight":0.63,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"createDate":"2023-09-28T02:25:15.802Z","stock":2,"id":70},{"productId":3,"vendorId":3,"name":"name 3","price":0.82,"weight":0.62,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"createDate":"2024-02-01T05:21:10.092Z","stock":3,"id":35},{"productId":4,"vendorId":4,"name":"name 4","price":0.03,"weight":1,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"createDate":"2023-03-10T14:18:46.382Z","stock":4,"id":100},{"productId":5,"vendorId":5,"name":"name 5","price":0,"weight":0.37,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"createDate":"2023-12-27T00:54:38.955Z","stock":5,"id":52}],"ProductCategories":[{"categoryId":1,"productId":1,"description":"description 1","id":79},{"categoryId":2,"productId":2,"description":"description 2","id":11},{"categoryId":3,"productId":3,"description":"description 3","id":23},{"categoryId":4,"productId":4,"description":"description 4","id":76},{"categoryId":5,"productId":5,"description":"description 5","id":27}],"Discounts":[{"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.83,"discountPercent":0.21,"id":35},{"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.04,"discountPercent":0.12,"id":66},{"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.75,"discountPercent":0.81,"id":21},{"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.91,"discountPercent":0.81,"id":45},{"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.59,"discountPercent":0.14,"id":59}],"ShoppingCart":[{"cartId":1,"customerId":1,"productId":1,"price":0.76,"quantity":1,"id":38},{"cartId":2,"customerId":2,"productId":2,"price":0.66,"quantity":2,"id":71},{"cartId":3,"customerId":3,"productId":3,"price":0.32,"quantity":3,"id":2},{"cartId":4,"customerId":4,"productId":4,"price":0.78,"quantity":4,"id":23},{"cartId":5,"customerId":5,"productId":5,"price":0.71,"quantity":5,"id":50}],"Orders":[{"orderId":1,"customerId":1,"totalAmount":0.86,"vat":0.84,"productTotalAmount":0.44,"shippingCost":0.52,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-09-10T03:54:04.544Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":64},{"orderId":2,"customerId":2,"totalAmount":0.17,"vat":0.88,"productTotalAmount":0.2,"shippingCost":0.5,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2024-12-06T13:26:43.753Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":26},{"orderId":3,"customerId":3,"totalAmount":0.16,"vat":0.73,"productTotalAmount":1,"shippingCost":0.08,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2024-04-18T12:39:48.059Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":60},{"orderId":4,"customerId":4,"totalAmount":0.75,"vat":0.92,"productTotalAmount":0.29,"shippingCost":0.85,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2023-05-04T02:47:38.123Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":27},{"orderId":5,"customerId":5,"totalAmount":0.51,"vat":0.09,"productTotalAmount":0.64,"shippingCost":0.27,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2024-01-24T09:44:49.769Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":16}],"OrderDetails":[{"orderId":1,"productId":1,"price":0.88,"quantity":1,"id":91},{"orderId":2,"productId":2,"price":0.07,"quantity":2,"id":41},{"orderId":3,"productId":3,"price":0.7,"quantity":3,"id":69},{"orderId":4,"productId":4,"price":0.74,"quantity":4,"id":84},{"orderId":5,"productId":5,"price":0.04,"quantity":5,"id":58}],"Payments":[{"paymentId":1,"orderId":1,"amount":0.65,"paymentMethod":"paymentMethod 1","paymentDate":"2023-05-29T07:50:44.980Z","paymentStatus":"paymentStatus 1","id":25},{"paymentId":2,"orderId":2,"amount":0.91,"paymentMethod":"paymentMethod 2","paymentDate":"2024-07-14T00:24:30.490Z","paymentStatus":"paymentStatus 2","id":29},{"paymentId":3,"orderId":3,"amount":0.28,"paymentMethod":"paymentMethod 3","paymentDate":"2023-03-29T09:35:39.033Z","paymentStatus":"paymentStatus 3","id":3},{"paymentId":4,"orderId":4,"amount":0.71,"paymentMethod":"paymentMethod 4","paymentDate":"2024-12-31T06:59:35.339Z","paymentStatus":"paymentStatus 4","id":75},{"paymentId":5,"orderId":5,"amount":0.58,"paymentMethod":"paymentMethod 5","paymentDate":"2023-06-03T07:59:14.887Z","paymentStatus":"paymentStatus 5","id":49}],"Reviews":[{"reviewId":1,"productId":1,"customerId":1,"vendorId":1,"rating":0.46,"reviewDetails":"reviewDetails 1","date":"2024-07-04T17:41:38.114Z","id":52},{"reviewId":2,"productId":2,"customerId":2,"vendorId":2,"rating":0.49,"reviewDetails":"reviewDetails 2","date":"2023-05-25T10:39:51.813Z","id":74},{"reviewId":3,"productId":3,"customerId":3,"vendorId":3,"rating":0,"reviewDetails":"reviewDetails 3","date":"2024-09-18T04:02:57.749Z","id":61},{"reviewId":4,"productId":4,"customerId":4,"vendorId":4,"rating":0.13,"reviewDetails":"reviewDetails 4","date":"2023-06-17T22:21:20.183Z","id":15},{"reviewId":5,"productId":5,"customerId":5,"vendorId":5,"rating":0.66,"reviewDetails":"reviewDetails 5","date":"2023-10-27T06:05:13.099Z","id":59}],"SupportTickets":[{"ticketId":1,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-08-05T02:30:11.263Z","resolutionDate":"2023-06-23T20:26:31.493Z","id":27},{"ticketId":2,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2023-10-27T11:32:58.438Z","resolutionDate":"2025-02-05T06:42:13.030Z","id":46},{"ticketId":3,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2023-10-14T17:47:14.340Z","resolutionDate":"2024-09-28T07:40:19.634Z","id":63},{"ticketId":4,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-11-01T10:16:52.090Z","resolutionDate":"2024-07-06T01:38:40.231Z","id":71},{"ticketId":5,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2025-01-19T16:03:03.840Z","resolutionDate":"2023-03-01T23:14:27.335Z","id":65}]};
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

