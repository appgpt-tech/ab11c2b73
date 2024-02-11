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
    let data: any = {"users":[{"id":6,"name":"name 1","email":"email 1","password":"password 1","role":"role 1"},{"id":23,"name":"name 2","email":"email 2","password":"password 2","role":"role 2"},{"id":54,"name":"name 3","email":"email 3","password":"password 3","role":"role 3"},{"id":72,"name":"name 4","email":"email 4","password":"password 4","role":"role 4"},{"id":72,"name":"name 5","email":"email 5","password":"password 5","role":"role 5"}],"vendors":[{"id":0,"companyName":"companyName 1","contactName":"contactName 1","email":"email 1","password":"password 1"},{"id":56,"companyName":"companyName 2","contactName":"contactName 2","email":"email 2","password":"password 2"},{"id":39,"companyName":"companyName 3","contactName":"contactName 3","email":"email 3","password":"password 3"},{"id":80,"companyName":"companyName 4","contactName":"contactName 4","email":"email 4","password":"password 4"},{"id":78,"companyName":"companyName 5","contactName":"contactName 5","email":"email 5","password":"password 5"}],"customers":[{"id":44,"email":"email 1","password":"password 1","name":"name 1","billingAddress":"billingAddress 1","shippingAddress":"shippingAddress 1","country":"country 1","phone":"phone 1"},{"id":47,"email":"email 2","password":"password 2","name":"name 2","billingAddress":"billingAddress 2","shippingAddress":"shippingAddress 2","country":"country 2","phone":"phone 2"},{"id":95,"email":"email 3","password":"password 3","name":"name 3","billingAddress":"billingAddress 3","shippingAddress":"shippingAddress 3","country":"country 3","phone":"phone 3"},{"id":44,"email":"email 4","password":"password 4","name":"name 4","billingAddress":"billingAddress 4","shippingAddress":"shippingAddress 4","country":"country 4","phone":"phone 4"},{"id":72,"email":"email 5","password":"password 5","name":"name 5","billingAddress":"billingAddress 5","shippingAddress":"shippingAddress 5","country":"country 5","phone":"phone 5"}],"inventory":[{"id":74,"productId":1,"quantity":1,"vendorId":1,"lowStockThreshold":1},{"id":98,"productId":2,"quantity":2,"vendorId":2,"lowStockThreshold":2},{"id":30,"productId":3,"quantity":3,"vendorId":3,"lowStockThreshold":3},{"id":43,"productId":4,"quantity":4,"vendorId":4,"lowStockThreshold":4},{"id":99,"productId":5,"quantity":5,"vendorId":5,"lowStockThreshold":5}],"products":[{"id":0,"vendorId":1,"name":"name 1","price":0.77,"weight":0.01,"description":"description 1","thumbnail":"thumbnail 1","image":"image 1","category":"category 1","createdDate":"2023-12-15T06:47:53.591Z"},{"id":87,"vendorId":2,"name":"name 2","price":0.53,"weight":0.52,"description":"description 2","thumbnail":"thumbnail 2","image":"image 2","category":"category 2","createdDate":"2023-03-15T23:06:16.683Z"},{"id":74,"vendorId":3,"name":"name 3","price":0.83,"weight":0.82,"description":"description 3","thumbnail":"thumbnail 3","image":"image 3","category":"category 3","createdDate":"2024-03-14T07:27:55.310Z"},{"id":7,"vendorId":4,"name":"name 4","price":0.39,"weight":0.49,"description":"description 4","thumbnail":"thumbnail 4","image":"image 4","category":"category 4","createdDate":"2024-12-21T05:44:34.163Z"},{"id":23,"vendorId":5,"name":"name 5","price":0.13,"weight":0.5,"description":"description 5","thumbnail":"thumbnail 5","image":"image 5","category":"category 5","createdDate":"2024-01-11T00:59:20.258Z"}],"productCategories":[{"id":68,"description":"description 1"},{"id":15,"description":"description 2"},{"id":49,"description":"description 3"},{"id":2,"description":"description 4"},{"id":90,"description":"description 5"}],"discounts":[{"id":73,"product_id":1,"discountName":"discountName 1","description":"description 1","discountAmount":0.81,"discountPercent":0.15},{"id":93,"product_id":2,"discountName":"discountName 2","description":"description 2","discountAmount":0.27,"discountPercent":0.2},{"id":39,"product_id":3,"discountName":"discountName 3","description":"description 3","discountAmount":0.14,"discountPercent":0.03},{"id":18,"product_id":4,"discountName":"discountName 4","description":"description 4","discountAmount":0.98,"discountPercent":0.46},{"id":42,"product_id":5,"discountName":"discountName 5","description":"description 5","discountAmount":0.17,"discountPercent":0.38}],"shoppingCarts":[{"id":98,"customerId":1,"productId":1,"price":0.61,"quantity":1},{"id":44,"customerId":2,"productId":2,"price":0.99,"quantity":2},{"id":48,"customerId":3,"productId":3,"price":0.43,"quantity":3},{"id":56,"customerId":4,"productId":4,"price":0.12,"quantity":4},{"id":85,"customerId":5,"productId":5,"price":0.99,"quantity":5}],"orders":[{"id":10,"customerId":1,"totalAmount":0.26,"vat":0.38,"productTotalAmount":0.85,"shippingCost":0.21,"shippingAddress":"shippingAddress 1","orderAddress":"orderAddress 1","orderEmail":"orderEmail 1","orderDate":"2023-08-29T01:54:33.200Z","orderStatus":"orderStatus 1","trackingNo":"trackingNo 1"},{"id":90,"customerId":2,"totalAmount":0.94,"vat":0.28,"productTotalAmount":0.86,"shippingCost":0.08,"shippingAddress":"shippingAddress 2","orderAddress":"orderAddress 2","orderEmail":"orderEmail 2","orderDate":"2025-01-05T14:25:08.880Z","orderStatus":"orderStatus 2","trackingNo":"trackingNo 2"},{"id":30,"customerId":3,"totalAmount":0.38,"vat":0.53,"productTotalAmount":0.71,"shippingCost":0.7,"shippingAddress":"shippingAddress 3","orderAddress":"orderAddress 3","orderEmail":"orderEmail 3","orderDate":"2025-01-21T17:15:11.327Z","orderStatus":"orderStatus 3","trackingNo":"trackingNo 3"},{"id":77,"customerId":4,"totalAmount":0.66,"vat":0.62,"productTotalAmount":0.5,"shippingCost":0.94,"shippingAddress":"shippingAddress 4","orderAddress":"orderAddress 4","orderEmail":"orderEmail 4","orderDate":"2024-11-18T17:39:20.760Z","orderStatus":"orderStatus 4","trackingNo":"trackingNo 4"},{"id":69,"customerId":5,"totalAmount":0.93,"vat":0.82,"productTotalAmount":0.18,"shippingCost":0.22,"shippingAddress":"shippingAddress 5","orderAddress":"orderAddress 5","orderEmail":"orderEmail 5","orderDate":"2023-05-31T11:08:33.982Z","orderStatus":"orderStatus 5","trackingNo":"trackingNo 5"}],"orderDetails":[{"id":0,"orderId":1,"productId":1,"price":0.5,"quantity":1},{"id":57,"orderId":2,"productId":2,"price":0.97,"quantity":2},{"id":15,"orderId":3,"productId":3,"price":0.31,"quantity":3},{"id":6,"orderId":4,"productId":4,"price":0.72,"quantity":4},{"id":91,"orderId":5,"productId":5,"price":0.54,"quantity":5}],"payments":[{"id":92,"orderId":1,"amount":0.07,"paymentMethod":"paymentMethod 1","paymentDate":"2023-05-14T20:38:18.684Z","paymentStatus":"paymentStatus 1"},{"id":0,"orderId":2,"amount":0.6,"paymentMethod":"paymentMethod 2","paymentDate":"2024-01-26T05:45:31.383Z","paymentStatus":"paymentStatus 2"},{"id":45,"orderId":3,"amount":0.23,"paymentMethod":"paymentMethod 3","paymentDate":"2023-10-11T11:40:07.607Z","paymentStatus":"paymentStatus 3"},{"id":97,"orderId":4,"amount":0.44,"paymentMethod":"paymentMethod 4","paymentDate":"2024-09-16T09:46:53.376Z","paymentStatus":"paymentStatus 4"},{"id":60,"orderId":5,"amount":0.27,"paymentMethod":"paymentMethod 5","paymentDate":"2024-12-23T16:20:34.105Z","paymentStatus":"paymentStatus 5"}],"reviews":[{"id":55,"productId":1,"customerId":1,"vendorId":1,"rating":1,"reviewDetails":"reviewDetails 1","date":"2023-09-03T10:50:26.593Z"},{"id":36,"productId":2,"customerId":2,"vendorId":2,"rating":2,"reviewDetails":"reviewDetails 2","date":"2024-06-23T13:40:53.365Z"},{"id":75,"productId":3,"customerId":3,"vendorId":3,"rating":3,"reviewDetails":"reviewDetails 3","date":"2024-05-06T17:39:18.622Z"},{"id":14,"productId":4,"customerId":4,"vendorId":4,"rating":4,"reviewDetails":"reviewDetails 4","date":"2024-11-16T23:28:50.013Z"},{"id":51,"productId":5,"customerId":5,"vendorId":5,"rating":5,"reviewDetails":"reviewDetails 5","date":"2023-03-23T09:25:02.778Z"}],"supportTickets":[{"id":91,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2024-09-28T00:43:07.339Z","resolutionDate":"2023-03-28T06:58:54.158Z"},{"id":23,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2023-05-12T03:19:43.069Z","resolutionDate":"2024-05-23T12:52:23.325Z"},{"id":22,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-01-25T18:49:39.927Z","resolutionDate":"2024-05-05T04:45:21.546Z"},{"id":30,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-06-26T10:58:08.236Z","resolutionDate":"2023-03-18T11:48:02.782Z"},{"id":48,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-10-08T10:20:45.812Z","resolutionDate":"2023-07-22T06:34:22.566Z"}]};
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

