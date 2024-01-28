//Class to create tables and seed new database
import { DataSource } from "typeorm";
import { DBConfiguration } from "./Configuration";
import { SettingsEntity } from "./db/Settings.entity";
//autogenerate imports based on resources
import { ProductsEntity } from "./db/Products.entity";
import { ProductcategoriesEntity } from "./db/Productcategories.entity";

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [SettingsEntity, ProductsEntity, ProductcategoriesEntity];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables


    await Database.Seed();
  }
  static async Seed() {
    let data: any = {"Products":[{"productId":"P01","sku":"SK01","name":"Product 1","price":100,"weight":1,"description":"Product 1 description","thumbnail":"thumbnail1.jpg","image":"image1.jpg","categoryId":"C01","createDate":"2022-01-01","stock":10},{"productId":"P02","sku":"SK02","name":"Product 2","price":200,"weight":2,"description":"Product 2 description","thumbnail":"thumbnail2.jpg","image":"image2.jpg","categoryId":"C02","createDate":"2022-02-01","stock":20},{"productId":"P03","sku":"SK03","name":"Product 3","price":300,"weight":3,"description":"Product 3 description","thumbnail":"thumbnail3.jpg","image":"image3.jpg","categoryId":"C03","createDate":"2022-03-01","stock":30}],"Productcategories":[{"id":"C01","categoryDescription":"Category 1"},{"id":"C02","categoryDescription":"Category 2"},{"id":"C03","categoryDescription":"Category 3"}]};
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true){
      console.log('   Seeding database...');
      await this.SeedResource("ProductsEntity", data.Products);
await this.SeedResource("ProductcategoriesEntity", data.Productcategories); 
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

