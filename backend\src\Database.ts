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
    let data: any = {"Users":[{"userId":1,"name":"name 1","email":"email 1","password":"password 1","role":"role 1","id":83},{"userId":2,"name":"name 2","email":"email 2","password":"password 2","role":"role 2","id":8},{"userId":3,"name":"name 3","email":"email 3","password":"password 3","role":"role 3","id":17},{"userId":4,"name":"name 4","email":"email 4","password":"password 4","role":"role 4","id":16},{"userId":5,"name":"name 5","email":"email 5","password":"password 5","role":"role 5","id":78}],"Customers":[{"customerId":1,"email":"email 1","password":"password 1","name":"name 1","age":1,"gender":"gender 1","weight":0.79,"height":0.77,"healthConditions":"healthConditions 1","goals":"goals 1","dietaryPreferences":"dietaryPreferences 1","billingAddress":"billingAddress 1","country":"country 1","phone":"phone 1","id":9},{"customerId":2,"email":"email 2","password":"password 2","name":"name 2","age":2,"gender":"gender 2","weight":0.24,"height":0.35,"healthConditions":"healthConditions 2","goals":"goals 2","dietaryPreferences":"dietaryPreferences 2","billingAddress":"billingAddress 2","country":"country 2","phone":"phone 2","id":68},{"customerId":3,"email":"email 3","password":"password 3","name":"name 3","age":3,"gender":"gender 3","weight":0.46,"height":0.69,"healthConditions":"healthConditions 3","goals":"goals 3","dietaryPreferences":"dietaryPreferences 3","billingAddress":"billingAddress 3","country":"country 3","phone":"phone 3","id":43},{"customerId":4,"email":"email 4","password":"password 4","name":"name 4","age":4,"gender":"gender 4","weight":0.84,"height":0.34,"healthConditions":"healthConditions 4","goals":"goals 4","dietaryPreferences":"dietaryPreferences 4","billingAddress":"billingAddress 4","country":"country 4","phone":"phone 4","id":59},{"customerId":5,"email":"email 5","password":"password 5","name":"name 5","age":5,"gender":"gender 5","weight":0.54,"height":0.6,"healthConditions":"healthConditions 5","goals":"goals 5","dietaryPreferences":"dietaryPreferences 5","billingAddress":"billingAddress 5","country":"country 5","phone":"phone 5","id":81}],"Workouts":[{"workoutId":1,"customerId":1,"type":"type 1","duration":0.01,"intensity":"intensity 1","caloriesBurned":0.29,"date":"2024-06-04T00:23:22.207Z","id":42},{"workoutId":2,"customerId":2,"type":"type 2","duration":0.36,"intensity":"intensity 2","caloriesBurned":0.42,"date":"2023-05-17T19:02:57.909Z","id":66},{"workoutId":3,"customerId":3,"type":"type 3","duration":0.29,"intensity":"intensity 3","caloriesBurned":0.69,"date":"2024-08-27T15:43:20.997Z","id":49},{"workoutId":4,"customerId":4,"type":"type 4","duration":0.93,"intensity":"intensity 4","caloriesBurned":0.63,"date":"2024-04-08T00:42:23.726Z","id":70},{"workoutId":5,"customerId":5,"type":"type 5","duration":0.11,"intensity":"intensity 5","caloriesBurned":0.22,"date":"2025-01-03T03:20:48.832Z","id":86}],"Nutrition":[{"mealId":1,"customerId":1,"foodItem":"foodItem 1","quantity":0.39,"calories":0.13,"macronutrients":"macronutrients 1","date":"2023-10-19T15:09:44.501Z","id":88},{"mealId":2,"customerId":2,"foodItem":"foodItem 2","quantity":0.06,"calories":0.93,"macronutrients":"macronutrients 2","date":"2023-06-19T17:36:34.103Z","id":44},{"mealId":3,"customerId":3,"foodItem":"foodItem 3","quantity":0.76,"calories":0.46,"macronutrients":"macronutrients 3","date":"2023-04-25T18:02:25.457Z","id":28},{"mealId":4,"customerId":4,"foodItem":"foodItem 4","quantity":0.54,"calories":0.82,"macronutrients":"macronutrients 4","date":"2023-11-10T21:55:48.474Z","id":34},{"mealId":5,"customerId":5,"foodItem":"foodItem 5","quantity":0.93,"calories":0.71,"macronutrients":"macronutrients 5","date":"2024-08-06T16:32:16.706Z","id":64}],"HealthMetrics":[{"metricId":1,"customerId":1,"type":"type 1","value":0.13,"unit":"unit 1","date":"2023-10-01T02:33:08.091Z","id":83},{"metricId":2,"customerId":2,"type":"type 2","value":0.95,"unit":"unit 2","date":"2023-09-11T00:48:44.632Z","id":94},{"metricId":3,"customerId":3,"type":"type 3","value":0.11,"unit":"unit 3","date":"2024-01-04T19:42:02.963Z","id":21},{"metricId":4,"customerId":4,"type":"type 4","value":0.42,"unit":"unit 4","date":"2023-08-12T12:41:18.204Z","id":95},{"metricId":5,"customerId":5,"type":"type 5","value":0.18,"unit":"unit 5","date":"2023-10-11T20:34:28.608Z","id":93}],"Notifications":[{"notificationId":1,"customerId":1,"type":"type 1","message":"message 1","dateScheduled":"2024-06-27T04:51:10.121Z","status":"status 1","id":87},{"notificationId":2,"customerId":2,"type":"type 2","message":"message 2","dateScheduled":"2023-12-23T10:48:30.003Z","status":"status 2","id":39},{"notificationId":3,"customerId":3,"type":"type 3","message":"message 3","dateScheduled":"2023-04-04T05:37:39.403Z","status":"status 3","id":53},{"notificationId":4,"customerId":4,"type":"type 4","message":"message 4","dateScheduled":"2024-05-28T20:19:17.457Z","status":"status 4","id":55},{"notificationId":5,"customerId":5,"type":"type 5","message":"message 5","dateScheduled":"2023-10-19T06:47:41.101Z","status":"status 5","id":38}],"SupportTickets":[{"ticketId":1,"userId":1,"customerId":1,"description":"description 1","status":"status 1","creationDate":"2023-11-10T08:48:46.750Z","resolutionDate":"2023-05-06T00:19:44.127Z","id":97},{"ticketId":2,"userId":2,"customerId":2,"description":"description 2","status":"status 2","creationDate":"2023-03-21T06:46:26.500Z","resolutionDate":"2023-06-24T13:13:00.547Z","id":89},{"ticketId":3,"userId":3,"customerId":3,"description":"description 3","status":"status 3","creationDate":"2024-06-21T21:18:17.722Z","resolutionDate":"2023-03-01T08:24:40.523Z","id":27},{"ticketId":4,"userId":4,"customerId":4,"description":"description 4","status":"status 4","creationDate":"2024-12-03T04:20:02.528Z","resolutionDate":"2024-10-01T11:51:29.055Z","id":91},{"ticketId":5,"userId":5,"customerId":5,"description":"description 5","status":"status 5","creationDate":"2023-02-26T20:02:57.369Z","resolutionDate":"2024-12-14T13:29:36.024Z","id":83}]};
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

