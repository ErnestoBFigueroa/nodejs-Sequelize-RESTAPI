import { sequelize } from "./database/database.js";
import app from "./app.js";

import "./models/Project.js";
import "./models/Task.js";

async function main() {
  try {
    // await sequelize.sync();
    await sequelize.sync({ force: false });
    await sequelize.authenticate();
    console.log("Connection has been established successfuly.");
    app.listen(3000);
    console.log("Server listening on port", 3000);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();
