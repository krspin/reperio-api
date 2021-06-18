import Knex from "knex";

const connection = {
  ssl: { rejectUnauthorized: false },
  host: process.env.DB_ENDPOINT,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME
};

export const knex = Knex({
  client: "mysql",
  connection
});

