import express from "express";
import morgan from "morgan";
import cors from "cors";
import { connect } from "mongoose";

import Students from "./routes/students";
import Nationality from "./routes/nationality";

(async () => {
  const app = express();

  // Middlewares
  app.use(express.json());
  app.use(morgan("dev"));
  app.use(cors());

  // To prevent 304 statuses on requests
  app.disable("etag");

  // Routes
  app.use("/", Students);
  app.use("/", Nationality);

  connect(process.env.MONGO || "", {})
    .then(() => console.info("Connection successful"))
    .catch(() =>
      console.error(
        "Problem connecting with database, check mongodb connection string"
      )
    );

  app.listen(5000);
})();
