//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { usersEntity } from "./db/users.entity";
import { vendorsEntity } from "./db/vendors.entity";
import { customersEntity } from "./db/customers.entity";
import { inventoryEntity } from "./db/inventory.entity";
import { productsEntity } from "./db/products.entity";
import { productCategoriesEntity } from "./db/productCategories.entity";
import { discountsEntity } from "./db/discounts.entity";
import { shoppingCartsEntity } from "./db/shoppingCarts.entity";
import { ordersEntity } from "./db/orders.entity";
import { orderDetailsEntity } from "./db/orderDetails.entity";
import { paymentsEntity } from "./db/payments.entity";
import { reviewsEntity } from "./db/reviews.entity";
import { supportTicketsEntity } from "./db/supportTickets.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, usersEntity, vendorsEntity, customersEntity, inventoryEntity, productsEntity, productCategoriesEntity, discountsEntity, shoppingCartsEntity, ordersEntity, orderDetailsEntity, paymentsEntity, reviewsEntity, supportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"users":[{"id":14,"name":"name 1","email":"email 1","password":"password 1","role":"role 1"},{"id":95,"name":"name 2","email":"email 2","password":"password 2","role":"role 2"},{"id":38,"name":"name 3","email":"email 3","password":"password 3","role":"role 3"},{"id":40,"name":"name 4","email":"email 4","password":"password 4","role":"role 4"},{"id":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5"}],"vendors":[{"id":49,"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1"},{"id":84,"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2"},{"id":18,"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3"},{"id":84,"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4"},{"id":24,"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5"}],"customers":[{"id":44,"email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","shippingAddress":"shippingAddress 1","country":"country 1","phone":"phone 1"},{"id":11,"email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","shippingAddress":"shippingAddress 2","country":"country 2","phone":"phone 2"},{"id":49,"email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","shippingAddress":"shippingAddress 3","country":"country 3","phone":"phone 3"},{"id":100,"email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","shippingAddress":"shippingAddress 4","country":"country 4","phone":"phone 4"},{"id":95,"email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","shippingAddress":"shippingAddress 5","country":"country 5","phone":"phone 5"}],"inventory":[{"id":59,"productId":1,"quantity":1,"vendorId":1,"lowStockThreshold":1},{"id":71,"productId":2,"quantity":2,"vendorId":2,"lowStockThreshold":2},{"id":86,"productId":3,"quantity":3,"vendorId":3,"lowStockThreshold":3},{"id":64,"productId":4,"quantity":4,"vendorId":4,"lowStockThreshold":4},{"id":33,"productId":5,"quantity":5,"vendorId":5,"lowStockThreshold":5}],"products":[{"id":31,"vendorId":1,"name":"name 1","price":0.14,"weight":0.16,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":1,"createdDate":"2024-08-11T20:40:44.464Z"},{"id":38,"vendorId":2,"name":"name 2","price":0.23,"weight":0.08,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":2,"createdDate":"2023-03-28T07:56:21.984Z"},{"id":95,"vendorId":3,"name":"name 3","price":0.05,"weight":0.49,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":3,"createdDate":"2023-09-28T19:30:31.389Z"},{"id":65,"vendorId":4,"name":"name 4","price":0.73,"weight":0.2,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":4,"createdDate":"2023-08-11T00:32:01.771Z"},{"id":77,"vendorId":5,"name":"name 5","price":0.91,"weight":0.36,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":5,"createdDate":"2023-03-13T02:10:23.203Z"}],"productCategories":[{"id":81,"description":"description 1"},{"id":22,"description":"description 2"},{"id":0,"description":"description 3"},{"id":22,"description":"description 4"},{"id":91,"description":"description 5"}],"discounts":[{"id":83,"productId":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.08,"discountPercent":0.29},{"id":74,"productId":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.79,"discountPercent":0.48},{"id":3,"productId":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.59,"discountPercent":0.23},{"id":86,"productId":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.17,"discountPercent":0.26},{"id":47,"productId":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.47,"discountPercent":0.25}],"shoppingCarts":[{"id":75,"customerId":1,"productId":1,"price":0.26,"quantity":1},{"id":60,"customerId":2,"productId":2,"price":1,"quantity":2},{"id":93,"customerId":3,"productId":3,"price":0.16,"quantity":3},{"id":71,"customerId":4,"productId":4,"price":0.43,"quantity":4},{"id":25,"customerId":5,"productId":5,"price":0.9,"quantity":5}],"orders":[{"id":83,"customerId":1,"totalAmount":0.84,"vat":0.63,"productTotalAmount":0.85,"shippingCost":0.23,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2023-02-24T18:28:22.451Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1"},{"id":16,"customerId":2,"totalAmount":0.34,"vat":0.82,"productTotalAmount":0.48,"shippingCost":0.84,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2023-07-11T02:19:17.473Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2"},{"id":92,"customerId":3,"totalAmount":0.57,"vat":0.67,"productTotalAmount":0.08,"shippingCost":0.17,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2024-02-19T06:23:48.702Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3"},{"id":94,"customerId":4,"totalAmount":0.41,"vat":0.4,"productTotalAmount":0.19,"shippingCost":0.81,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2023-09-26T05:37:19.286Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4"},{"id":65,"customerId":5,"totalAmount":0.21,"vat":0.55,"productTotalAmount":0.1,"shippingCost":0.75,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2024-01-02T08:59:01.321Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5"}],"orderDetails":[{"id":6,"orderId":1,"productId":1,"price":0.86,"quantity":1},{"id":98,"orderId":2,"productId":2,"price":0.61,"quantity":2},{"id":91,"orderId":3,"productId":3,"price":0.48,"quantity":3},{"id":2,"orderId":4,"productId":4,"price":0.71,"quantity":4},{"id":48,"orderId":5,"productId":5,"price":0.7,"quantity":5}],"payments":[{"id":45,"orderId":1,"amount":0.53,"paymentMethod":"paymentMethod 1","paymentDate":"2023-10-22T20:05:44.924Z","paymentStatus":"paymentStatus 1"},{"id":53,"orderId":2,"amount":0.5,"paymentMethod":"paymentMethod 2","paymentDate":"2024-03-23T11:45:06.269Z","paymentStatus":"paymentStatus 2"},{"id":97,"orderId":3,"amount":0.85,"paymentMethod":"paymentMethod 3","paymentDate":"2025-02-10T04:58:12.499Z","paymentStatus":"paymentStatus 3"},{"id":42,"orderId":4,"amount":0.84,"paymentMethod":"paymentMethod 4","paymentDate":"2023-12-07T12:02:25.126Z","paymentStatus":"paymentStatus 4"},{"id":87,"orderId":5,"amount":0.71,"paymentMethod":"paymentMethod 5","paymentDate":"2024-07-06T04:06:53.854Z","paymentStatus":"paymentStatus 5"}],"reviews":[{"id":7,"productId":1,"customerId":1,"vendorId":1,"rating":0.67,"reviewDetails":"reviewDetails 1","date":"2023-10-11T20:37:51.466Z"},{"id":100,"productId":2,"customerId":2,"vendorId":2,"rating":0.94,"reviewDetails":"reviewDetails 2","date":"2023-12-25T08:55:02.083Z"},{"id":29,"productId":3,"customerId":3,"vendorId":3,"rating":0,"reviewDetails":"reviewDetails 3","date":"2024-03-25T23:08:34.928Z"},{"id":83,"productId":4,"customerId":4,"vendorId":4,"rating":0.98,"reviewDetails":"reviewDetails 4","date":"2024-09-21T09:09:02.002Z"},{"id":72,"productId":5,"customerId":5,"vendorId":5,"rating":0.1,"reviewDetails":"reviewDetails 5","date":"2023-03-11T11:52:32.650Z"}],"supportTickets":[{"id":33,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-04-10T11:53:34.837Z","lastUpdateDate":"2023-04-10T13:25:28.444Z"},{"id":59,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-07-03T14:34:07.618Z","lastUpdateDate":"2024-10-01T02:44:01.916Z"},{"id":14,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2023-07-08T05:19:51.424Z","lastUpdateDate":"2024-03-24T16:48:49.298Z"},{"id":45,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-10-29T21:14:51.512Z","lastUpdateDate":"2024-11-05T04:10:05.540Z"},{"id":11,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-06-23T15:23:35.361Z","lastUpdateDate":"2024-05-06T04:03:11.984Z"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("usersEntity", data.users);
await this.SeedResource("vendorsEntity", data.vendors);
await this.SeedResource("customersEntity", data.customers);
await this.SeedResource("inventoryEntity", data.inventory);
await this.SeedResource("productsEntity", data.products);
await this.SeedResource("productCategoriesEntity", data.productCategories);
await this.SeedResource("discountsEntity", data.discounts);
await this.SeedResource("shoppingCartsEntity", data.shoppingCarts);
await this.SeedResource("ordersEntity", data.orders);
await this.SeedResource("orderDetailsEntity", data.orderDetails);
await this.SeedResource("paymentsEntity", data.payments);
await this.SeedResource("reviewsEntity", data.reviews);
await this.SeedResource("supportTicketsEntity", data.supportTickets); 
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

