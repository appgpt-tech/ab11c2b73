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
    let data: any = {"Student":[{"studentId":"STU123","name":"John Doe"},{"studentId":"STU124","name":"Jane Doe"},{"studentId":"STU125","name":"Sam Smith"}],"Activity":[{"activityId":"ACT123","description":"Mathematics Tutoring","tutorName":"Mr. James","costPerLesson":30},{"activityId":"ACT124","description":"Physics Tutoring","tutorName":"Ms. Jane","costPerLesson":33},{"activityId":"ACT125","description":"Chemistry Tutoring","tutorName":"Mr. Smith","costPerLesson":35}],"Attendance":[{"attendanceId":"ATT123","date":"2023-02-13","studentId":"STU123","activityId":"ACT123"},{"attendanceId":"ATT124","date":"2023-02-14","studentId":"STU124","activityId":"ACT124"},{"attendanceId":"ATT125","date":"2023-02-15","studentId":"STU125","activityId":"ACT125"}]};
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

