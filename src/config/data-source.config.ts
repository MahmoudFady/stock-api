import { DataSource } from "typeorm";
import { appEnv } from "./env.config";
import { Supplier } from "../entities/supplier.entity";
import { Employee } from "../entities/employee.entity";
import { Lookup } from "../entities/lookup.entity";
import { LookupDetail } from "../entities/lookup-details.entity";
import { LookupGroup } from "../entities/lookup-group.entity";
export const DataSourceConfig = new DataSource({
  type: "mysql",
  host: appEnv.DB_HOST,
  port: appEnv.DB_PORT,
  username: appEnv.DB_USERNAME,
  password: appEnv.DB_PASSWORD,
  database: appEnv.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [LookupGroup, Lookup, LookupDetail, Employee, Supplier],
  subscribers: [],
  migrations: [],
});
export const AppDataSource = DataSourceConfig.initialize();
