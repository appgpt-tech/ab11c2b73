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
    let data: any = {"Users":[{"userId":1,"name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":44},{"userId":2,"name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":77},{"userId":3,"name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":84},{"userId":4,"name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":82},{"userId":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":40}],"Customers":[{"customerId":1,"email":"email 1","password":"password 1","name":"name 1","age":1,"gender":"gender 1","weight":0.19,"height":0.43,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":75},{"customerId":2,"email":"email 2","password":"password 2","name":"name 2","age":2,"gender":"gender 2","weight":0.69,"height":0.55,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":100},{"customerId":3,"email":"email 3","password":"password 3","name":"name 3","age":3,"gender":"gender 3","weight":0.63,"height":0.81,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":84},{"customerId":4,"email":"email 4","password":"password 4","name":"name 4","age":4,"gender":"gender 4","weight":0.85,"height":0,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":88},{"customerId":5,"email":"email 5","password":"password 5","name":"name 5","age":5,"gender":"gender 5","weight":0.08,"height":0.79,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":0}],"Workouts":[{"workoutId":1,"customerId":1,"type":"type 1","duration":0.26,"intensity":"intensity 1","caloriesBurned":0.24,"date":"2024-03-22T13:20:27.755Z","id":97},{"workoutId":2,"customerId":2,"type":"type 2","duration":0.97,"intensity":"intensity 2","caloriesBurned":0.36,"date":"2023-02-18T01:14:07.238Z","id":36},{"workoutId":3,"customerId":3,"type":"type 3","duration":0.6,"intensity":"intensity 3","caloriesBurned":0.5,"date":"2023-10-18T22:17:26.567Z","id":77},{"workoutId":4,"customerId":4,"type":"type 4","duration":0.6,"intensity":"intensity 4","caloriesBurned":0.31,"date":"2024-12-23T03:32:26.362Z","id":22},{"workoutId":5,"customerId":5,"type":"type 5","duration":0.96,"intensity":"intensity 5","caloriesBurned":0.7,"date":"2024-08-27T08:56:27.497Z","id":15}],"Nutrition":[{"mealId":1,"customerId":1,"foodItem":"foodItem 1","quantity":0.5,"calories":0.8,"macronutrients":"macronutrients 1","date":"2024-11-11T05:23:14.032Z","id":29},{"mealId":2,"customerId":2,"foodItem":"foodItem 2","quantity":0.09,"calories":0.17,"macronutrients":"macronutrients 2","date":"2023-09-12T03:12:20.420Z","id":15},{"mealId":3,"customerId":3,"foodItem":"foodItem 3","quantity":0.99,"calories":0.71,"macronutrients":"macronutrients 3","date":"2023-06-01T05:12:14.294Z","id":87},{"mealId":4,"customerId":4,"foodItem":"foodItem 4","quantity":0.65,"calories":0.21,"macronutrients":"macronutrients 4","date":"2023-06-28T19:53:34.353Z","id":25},{"mealId":5,"customerId":5,"foodItem":"foodItem 5","quantity":0.16,"calories":0.68,"macronutrients":"macronutrients 5","date":"2024-08-30T05:58:34.465Z","id":85}],"HealthMetrics":[{"metricId":1,"customerId":1,"type":"type 1","value":0.7,"unit":"unit 1","date":"2023-06-28T19:04:25.426Z","id":91},{"metricId":2,"customerId":2,"type":"type 2","value":0.68,"unit":"unit 2","date":"2024-12-22T06:39:17.696Z","id":45},{"metricId":3,"customerId":3,"type":"type 3","value":0.72,"unit":"unit 3","date":"2024-04-06T06:21:40.507Z","id":93},{"metricId":4,"customerId":4,"type":"type 4","value":0.22,"unit":"unit 4","date":"2024-04-30T03:58:35.553Z","id":8},{"metricId":5,"customerId":5,"type":"type 5","value":0.03,"unit":"unit 5","date":"2024-03-10T01:08:22.203Z","id":8}],"Notifications":[{"notificationId":1,"customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2023-12-15T03:24:52.162Z","status":"status 1","id":72},{"notificationId":2,"customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2024-03-10T11:26:36.017Z","status":"status 2","id":60},{"notificationId":3,"customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2024-10-25T01:52:21.419Z","status":"status 3","id":7},{"notificationId":4,"customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2024-02-24T05:19:27.827Z","status":"status 4","id":23},{"notificationId":5,"customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2023-06-28T16:17:37.225Z","status":"status 5","id":67}],"SupportTickets":[{"ticketId":1,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-06-17T21:39:56.970Z","resolutionDate":"2025-01-16T01:23:54.321Z","id":0},{"ticketId":2,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2023-03-25T10:01:29.351Z","resolutionDate":"2024-08-11T04:06:27.445Z","id":8},{"ticketId":3,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-11-14T06:27:32.783Z","resolutionDate":"2023-06-18T04:18:42.616Z","id":13},{"ticketId":4,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2023-08-12T04:53:15.911Z","resolutionDate":"2024-12-25T05:01:59.673Z","id":18},{"ticketId":5,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2024-05-02T12:37:54.303Z","resolutionDate":"2024-07-06T15:52:13.786Z","id":45}]};
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

