import { Sequelize } from "sequelize";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  FRONTEND_URL,
  PORT,
} from "../config.js";

export const sequelize = new Sequelize(
  DB_DATABASE, //'Adincoha',
  DB_USER, //"postgres",
  DB_PASSWORD, //"Carambola83$",
  {
    host: DB_HOST, //"localhost",
    dialect: "postgres",
  }
);
