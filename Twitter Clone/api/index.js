import express from "express";
import dotenv from "dotenv";
import { connect } from "./db/db.js";
import * as routes from "./routes/index.js";

const app = express();
dotenv.config();

app.use(express.json());
app.use("/api/users", routes.userRoutes);
app.use("/api/auth", routes.authRoutes);

const server = () => {
  connect();
  app.listen(process.env.PORT, () => {
    console.log("Listening to port:", process.env.PORT);
  });
};

server();
