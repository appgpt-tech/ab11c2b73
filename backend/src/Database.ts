//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { StudentEntity } from "./db/Student.entity";
import { ActivityEntity } from "./db/Activity.entity";
import { AttendanceEntity } from "./db/Attendance.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, StudentEntity, ActivityEntity, AttendanceEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Student":[{"id":1,"name":"John Doe"},{"id":2,"name":"Jane Doe"},{"id":3,"name":"Steve Smith"}],"Activity":[{"id":1,"description":"Mathematics Tutoring","tutorsName":"Mr. James","costPerLesson":50},{"id":2,"description":"Music Lessons - Piano","tutorsName":"Mrs. Smith","costPerLesson":60},{"id":3,"description":"Swimming Lessons","tutorsName":"Coach Mike","costPerLesson":45}],"Attendance":[{"id":1,"date":"2022-01-01","time":"10:00:00","studentId":1,"activityId":3},{"id":2,"date":"2022-01-02","time":"14:00:00","studentId":2,"activityId":1},{"id":3,"date":"2022-01-01","time":"13:00:00","studentId":3,"activityId":2}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("StudentEntity", data.Student);
await this.SeedResource("ActivityEntity", data.Activity);
await this.SeedResource("AttendanceEntity", data.Attendance); 
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

