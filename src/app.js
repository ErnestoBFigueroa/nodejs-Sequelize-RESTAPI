import express from "express";
import projectsRoutes from "./routes/projects.routes.js";
import cors from "cors";
import {
  DB_DATABASE,
  DB_HOST,
  DB_PASSWORD,
  DB_PORT,
  DB_USER,
  FRONTEND_URL,
  PORT,
} from "./config.js";

const app = express();
const whiteList = [FRONTEND_URL];

app.use(
  cors({
    origin: whiteList,
  })
);

// middlewares
app.use(express.json());

app.use(projectsRoutes);

export default app;
