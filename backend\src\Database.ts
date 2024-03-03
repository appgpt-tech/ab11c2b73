// Source code generated by AppGPT (www.appgpt.tech)

 //Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { UsersEntity } from "./db/Users.entity";
import { CustomersEntity } from "./db/Customers.entity";
import { WorkoutsEntity } from "./db/Workouts.entity";
import { NutritionEntity } from "./db/Nutrition.entity";
import { HealthMetricsEntity } from "./db/HealthMetrics.entity";
import { NotificationsEntity } from "./db/Notifications.entity";
import { SupportTicketsEntity } from "./db/SupportTickets.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, UsersEntity, CustomersEntity, WorkoutsEntity, NutritionEntity, HealthMetricsEntity, NotificationsEntity, SupportTicketsEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Users":[{"userId":1,"name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":48},{"userId":2,"name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":24},{"userId":3,"name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":28},{"userId":4,"name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":73},{"userId":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":28}],"Customers":[{"customerId":1,"email":"email 1","password":"password 1","name":"name 1","age":1,"gender":"gender 1","weight":0.32,"height":0.17,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":42},{"customerId":2,"email":"email 2","password":"password 2","name":"name 2","age":2,"gender":"gender 2","weight":0.95,"height":0.95,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":6},{"customerId":3,"email":"email 3","password":"password 3","name":"name 3","age":3,"gender":"gender 3","weight":0.34,"height":0.86,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":45},{"customerId":4,"email":"email 4","password":"password 4","name":"name 4","age":4,"gender":"gender 4","weight":0.88,"height":0.1,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":26},{"customerId":5,"email":"email 5","password":"password 5","name":"name 5","age":5,"gender":"gender 5","weight":0.77,"height":0.87,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":99}],"Workouts":[{"workoutId":1,"customerId":1,"type":"type 1","duration":0.09,"intensity":"intensity 1","caloriesBurned":0.86,"date":"2023-06-07T03:41:37.222Z","id":97},{"workoutId":2,"customerId":2,"type":"type 2","duration":0.85,"intensity":"intensity 2","caloriesBurned":0.79,"date":"2023-03-14T12:21:02.571Z","id":2},{"workoutId":3,"customerId":3,"type":"type 3","duration":0.94,"intensity":"intensity 3","caloriesBurned":0.98,"date":"2024-08-20T20:22:57.273Z","id":44},{"workoutId":4,"customerId":4,"type":"type 4","duration":0.06,"intensity":"intensity 4","caloriesBurned":0.4,"date":"2023-11-12T17:35:56.912Z","id":7},{"workoutId":5,"customerId":5,"type":"type 5","duration":0.17,"intensity":"intensity 5","caloriesBurned":0.87,"date":"2024-12-27T05:25:28.414Z","id":19}],"Nutrition":[{"mealId":1,"customerId":1,"foodItem":"foodItem 1","quantity":0.24,"calories":0.77,"macronutrients":"macronutrients 1","date":"2024-08-24T05:10:17.506Z","id":26},{"mealId":2,"customerId":2,"foodItem":"foodItem 2","quantity":0.04,"calories":0.35,"macronutrients":"macronutrients 2","date":"2025-02-28T18:06:01.800Z","id":67},{"mealId":3,"customerId":3,"foodItem":"foodItem 3","quantity":0.24,"calories":0.48,"macronutrients":"macronutrients 3","date":"2024-08-10T18:45:51.160Z","id":49},{"mealId":4,"customerId":4,"foodItem":"foodItem 4","quantity":0.13,"calories":0.39,"macronutrients":"macronutrients 4","date":"2023-07-04T16:13:03.300Z","id":21},{"mealId":5,"customerId":5,"foodItem":"foodItem 5","quantity":0.04,"calories":0.97,"macronutrients":"macronutrients 5","date":"2023-12-07T22:40:26.682Z","id":61}],"HealthMetrics":[{"metricId":1,"customerId":1,"type":"type 1","value":0.21,"unit":"unit 1","date":"2024-07-26T23:28:22.557Z","id":67},{"metricId":2,"customerId":2,"type":"type 2","value":0.82,"unit":"unit 2","date":"2024-01-26T14:47:10.627Z","id":34},{"metricId":3,"customerId":3,"type":"type 3","value":0.08,"unit":"unit 3","date":"2023-04-01T20:46:55.500Z","id":63},{"metricId":4,"customerId":4,"type":"type 4","value":0.83,"unit":"unit 4","date":"2024-10-14T11:19:09.515Z","id":55},{"metricId":5,"customerId":5,"type":"type 5","value":0,"unit":"unit 5","date":"2024-09-24T04:49:07.024Z","id":92}],"Notifications":[{"notificationId":1,"customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2023-05-09T21:04:31.930Z","status":"status 1","id":53},{"notificationId":2,"customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2023-09-26T21:24:03.094Z","status":"status 2","id":91},{"notificationId":3,"customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2025-01-06T02:22:50.833Z","status":"status 3","id":93},{"notificationId":4,"customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2023-09-18T13:22:54.148Z","status":"status 4","id":49},{"notificationId":5,"customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2023-05-02T03:47:18.540Z","status":"status 5","id":6}],"SupportTickets":[{"ticketId":1,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-06-07T23:53:49.075Z","resolutionDate":"2023-09-03T09:52:14.022Z","id":47},{"ticketId":2,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2024-06-04T11:31:17.858Z","resolutionDate":"2024-06-26T22:32:16.137Z","id":26},{"ticketId":3,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2025-02-24T09:10:02.773Z","resolutionDate":"2024-08-16T08:59:31.285Z","id":51},{"ticketId":4,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-11-01T19:03:43.126Z","resolutionDate":"2023-03-16T20:11:10.501Z","id":99},{"ticketId":5,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-06-18T16:34:24.410Z","resolutionDate":"2024-12-15T07:03:41.753Z","id":85}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("UsersEntity", data.Users);
await this.SeedResource("CustomersEntity", data.Customers);
await this.SeedResource("WorkoutsEntity", data.Workouts);
await this.SeedResource("NutritionEntity", data.Nutrition);
await this.SeedResource("HealthMetricsEntity", data.HealthMetrics);
await this.SeedResource("NotificationsEntity", data.Notifications);
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

