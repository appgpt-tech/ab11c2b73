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
    let data: any = {"Users":[{"userId":1,"name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":50},{"userId":2,"name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":15},{"userId":3,"name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":66},{"userId":4,"name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":97},{"userId":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":29}],"Vendors":[{"vendorId":1,"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1","id":81},{"vendorId":2,"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2","id":33},{"vendorId":3,"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3","id":8},{"vendorId":4,"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4","id":97},{"vendorId":5,"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5","id":43}],"Customers":[{"customerId":1,"email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","defaultShippingAddress":"defaultShippingAddress 1","country":"country 1","phone":"phone 1","cartId":1,"id":53},{"customerId":2,"email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","defaultShippingAddress":"defaultShippingAddress 2","country":"country 2","phone":"phone 2","cartId":2,"id":21},{"customerId":3,"email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","defaultShippingAddress":"defaultShippingAddress 3","country":"country 3","phone":"phone 3","cartId":3,"id":36},{"customerId":4,"email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","defaultShippingAddress":"defaultShippingAddress 4","country":"country 4","phone":"phone 4","cartId":4,"id":20},{"customerId":5,"email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","defaultShippingAddress":"defaultShippingAddress 5","country":"country 5","phone":"phone 5","cartId":5,"id":18}],"Inventory":[{"productId":1,"quantity":1,"lowStockThreshold":1,"id":34},{"productId":2,"quantity":2,"lowStockThreshold":2,"id":25},{"productId":3,"quantity":3,"lowStockThreshold":3,"id":39},{"productId":4,"quantity":4,"lowStockThreshold":4,"id":31},{"productId":5,"quantity":5,"lowStockThreshold":5,"id":70}],"Products":[{"productId":1,"vendorId":1,"name":"name 1","price":0.36,"weight":0.23,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"createDate":"2024-10-08T01:39:39.954Z","stock":1,"id":77},{"productId":2,"vendorId":2,"name":"name 2","price":0.6,"weight":0.98,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"createDate":"2024-03-27T09:07:02.171Z","stock":2,"id":51},{"productId":3,"vendorId":3,"name":"name 3","price":0.61,"weight":0.85,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"createDate":"2024-09-10T20:35:19.829Z","stock":3,"id":89},{"productId":4,"vendorId":4,"name":"name 4","price":0.36,"weight":0.13,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"createDate":"2024-02-18T00:52:57.504Z","stock":4,"id":48},{"productId":5,"vendorId":5,"name":"name 5","price":0.31,"weight":0.38,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"createDate":"2023-06-24T21:08:47.746Z","stock":5,"id":53}],"ProductCategories":[{"categoryId":1,"productId":1,"description":"description 1","id":47},{"categoryId":2,"productId":2,"description":"description 2","id":55},{"categoryId":3,"productId":3,"description":"description 3","id":3},{"categoryId":4,"productId":4,"description":"description 4","id":33},{"categoryId":5,"productId":5,"description":"description 5","id":94}],"Discounts":[{"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.79,"discountPercent":0.36,"id":60},{"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.82,"discountPercent":0.32,"id":50},{"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.4,"discountPercent":0.98,"id":5},{"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.08,"discountPercent":0.41,"id":67},{"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.79,"discountPercent":0.98,"id":56}],"ShoppingCart":[{"cartId":1,"customerId":1,"productId":1,"price":0.43,"quantity":1,"id":76},{"cartId":2,"customerId":2,"productId":2,"price":0.92,"quantity":2,"id":0},{"cartId":3,"customerId":3,"productId":3,"price":0,"quantity":3,"id":55},{"cartId":4,"customerId":4,"productId":4,"price":0.47,"quantity":4,"id":1},{"cartId":5,"customerId":5,"productId":5,"price":0.43,"quantity":5,"id":38}],"Orders":[{"orderId":1,"customerId":1,"totalAmount":0.89,"vat":0.48,"productTotalAmount":0.42,"shippingCost":0.51,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2024-01-08T06:47:33.219Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1","id":6},{"orderId":2,"customerId":2,"totalAmount":0.11,"vat":0.72,"productTotalAmount":0.56,"shippingCost":0.09,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2024-12-28T23:19:12.808Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2","id":76},{"orderId":3,"customerId":3,"totalAmount":0.2,"vat":0.7,"productTotalAmount":0.25,"shippingCost":1,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2023-02-21T09:13:34.359Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3","id":58},{"orderId":4,"customerId":4,"totalAmount":0.9,"vat":0.3,"productTotalAmount":0.22,"shippingCost":0.3,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2024-03-20T11:33:05.765Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4","id":28},{"orderId":5,"customerId":5,"totalAmount":0.84,"vat":0.95,"productTotalAmount":0.42,"shippingCost":0.96,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2023-08-29T15:02:29.687Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5","id":44}],"OrderDetails":[{"orderId":1,"productId":1,"price":0.88,"quantity":1,"id":47},{"orderId":2,"productId":2,"price":0.91,"quantity":2,"id":32},{"orderId":3,"productId":3,"price":0.64,"quantity":3,"id":84},{"orderId":4,"productId":4,"price":0.47,"quantity":4,"id":68},{"orderId":5,"productId":5,"price":0.17,"quantity":5,"id":79}],"Payments":[{"paymentId":1,"orderId":1,"amount":0.39,"paymentMethod":"paymentMethod 1","paymentDate":"2025-01-28T19:02:27.863Z","paymentStatus":"paymentStatus 1","id":16},{"paymentId":2,"orderId":2,"amount":0.85,"paymentMethod":"paymentMethod 2","paymentDate":"2024-07-03T09:05:41.702Z","paymentStatus":"paymentStatus 2","id":48},{"paymentId":3,"orderId":3,"amount":0.26,"paymentMethod":"paymentMethod 3","paymentDate":"2023-12-11T09:14:10.187Z","paymentStatus":"paymentStatus 3","id":46},{"paymentId":4,"orderId":4,"amount":0.82,"paymentMethod":"paymentMethod 4","paymentDate":"2024-06-06T05:10:16.371Z","paymentStatus":"paymentStatus 4","id":32},{"paymentId":5,"orderId":5,"amount":0.28,"paymentMethod":"paymentMethod 5","paymentDate":"2023-07-30T22:48:15.617Z","paymentStatus":"paymentStatus 5","id":58}],"Reviews":[{"reviewId":1,"productId":1,"customerId":1,"vendorId":1,"rating":0.09,"reviewDetails":"reviewDetails 1","date":"2024-10-28T06:14:55.035Z","id":11},{"reviewId":2,"productId":2,"customerId":2,"vendorId":2,"rating":0.87,"reviewDetails":"reviewDetails 2","date":"2023-10-18T18:16:14.713Z","id":32},{"reviewId":3,"productId":3,"customerId":3,"vendorId":3,"rating":0.58,"reviewDetails":"reviewDetails 3","date":"2023-06-15T22:52:54.927Z","id":50},{"reviewId":4,"productId":4,"customerId":4,"vendorId":4,"rating":0.08,"reviewDetails":"reviewDetails 4","date":"2023-11-08T21:20:03.018Z","id":70},{"reviewId":5,"productId":5,"customerId":5,"vendorId":5,"rating":0.34,"reviewDetails":"reviewDetails 5","date":"2023-04-17T10:39:15.252Z","id":51}],"SupportTickets":[{"ticketId":1,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-08-12T05:32:40.828Z","resolutionDate":"2023-12-01T22:01:32.856Z","id":61},{"ticketId":2,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-04-18T17:37:39.310Z","resolutionDate":"2023-04-23T11:31:03.999Z","id":41},{"ticketId":3,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-02-10T02:27:51.368Z","resolutionDate":"2023-08-22T14:41:47.592Z","id":90},{"ticketId":4,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-03-24T22:57:13.095Z","resolutionDate":"2023-07-25T03:15:43.725Z","id":27},{"ticketId":5,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-09-19T09:11:37.114Z","resolutionDate":"2023-08-19T06:40:03.501Z","id":6}]};
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

