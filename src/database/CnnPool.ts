import { createConnection } from "mysql";

export const db = createConnection({
  host: process.env.dbHostname,
  user: process.env.dbUsername,
  password: process.env.dbPassword,
  database: process.env.dbDatabaseName
});

